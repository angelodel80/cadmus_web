import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { EditPartState } from '..';
import { EditPartStore } from './edit-part.store';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class EditPartQuery<T> extends Query<EditPartState<T>> {
  constructor(protected store: EditPartStore<T>) {
    super(store);
  }

  public selectSaving(): Observable<boolean> {
    return this.select(state => state.saving);
  }

  public selectJson(
    itemId: string,
    partId: string,
    roleId: string | null
  ): Observable<string> {
    return this.select(state => state.part).pipe(
      map((p: T) => {
        // supply IDs
        if (p) {
          p['itemId'] = itemId;
          p['id'] = partId;
          p['roleId'] = roleId;
        }
        return JSON.stringify(p || {});
      })
    );
  }
}