import { ItemService, ThesaurusService } from '@cadmus/api';
import { forkJoin } from 'rxjs';

export interface EditPartStoreApi {
  update(value: any): void;
  setLoading(value: boolean): void;
  setDirty(value: boolean): void;
  setSaving(value: boolean): void;
  setError(value: string): void;
}

export abstract class EditPartServiceBase {
  protected store: EditPartStoreApi;

  constructor(
    protected itemService: ItemService,
    protected thesaurusService: ThesaurusService
  ) {}

  public load(partId: string, thesauriIds: string[] | null = null) {
    this.store.setLoading(true);

    if (thesauriIds) {
      // remove trailing ! from IDs if any
      const unscopedIds = thesauriIds.map(id => {
        return this.thesaurusService.getScopedId(id, null);
      });

      forkJoin({
        part: this.itemService.getPart(partId),
        thesauri: this.thesaurusService.getThesauri(unscopedIds)
      }).subscribe(result => {
        this.store.setLoading(false);
        this.store.update({
          part: result.part,
          thesauri: result.thesauri
        });
        // if the loaded part has a thesaurus scope, reload the thesauri
        if (result.part.thesaurusScope) {
          const scopedIds: string[] = thesauriIds.map(id => {
            return this.thesaurusService.getScopedId(
              id,
              result.part.thesaurusScope
            );
          });
          this.store.setLoading(true);
          this.thesaurusService.getThesauri(thesauriIds).subscribe(
            thesauri => {
              this.store.update({
                thesauri: thesauri
              });
            },
            error => {
              console.error(error);
              this.store.setLoading(false);
              this.store.setError(
                'Error loading thesauri ' + scopedIds.join(', ')
              );
            }
          );
        } // scoped
      });
    } else {
      this.itemService.getPart(partId).subscribe(
        part => {
          this.store.update({
            part: part,
            loading: false,
            error: null
          });
        },
        error => {
          console.error(error);
          this.store.setLoading(false);
          this.store.setError('Error loading part ' + partId);
        }
      );
    }
  }

  public save(json: string) {
    this.store.setSaving(true);
    this.store.setDirty(true);

    this.itemService.addPartJson(json).subscribe(
      _ => {
        this.store.setSaving(false);
        this.store.setDirty(false);
        this.store.setError(null);
      },
      error => {
        console.error(error);
        this.store.setSaving(true);
        this.store.setError('Error saving part');
      }
    );
  }

  public setDirty(value = true) {
    this.store.setDirty(value);
  }
}
