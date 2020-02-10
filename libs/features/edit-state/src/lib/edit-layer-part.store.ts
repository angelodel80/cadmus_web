import { StoreConfig, Store } from '@datorama/akita';
import { TextLayerPart, Part } from '@cadmus/core';
import { Injectable } from '@angular/core';

/**
 * The state of the currently edited text layer part, if any.
 * This state is set when editing a text layer.
 */
export interface EditLayerPartState {
  /**
   * The layer part (=collection of fragments) being edited.
   */
  part: TextLayerPart | null;
  /**
   * The base text rendered into a plain string, whatever its original model.
   * This is used for reference (e.g. show it to the user while editing),
   * even if in some cases it can be enough to work with the base text in the
   * layer part editor itself (this is the case of the token-based text,
   * but not e.g. for the tiles-based text).
   */
  baseText: string | null;
  /**
   * The base text part.
   */
  baseTextPart: Part | null;
  // this is implemented in Akita stores, but you must add the keys
  // https://github.com/datorama/akita/issues/61
  loading?: boolean;
  error?: string;
  deletingFragment?: boolean;
  savingFragment?: boolean;
}

const initialState: EditLayerPartState = {
  part: null,
  baseText: null,
  baseTextPart: null,
  loading: false,
  error: null,
  deletingFragment: false,
  savingFragment: false
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'edit-layer-part' })
export class EditLayerPartStore extends Store<EditLayerPartState> {
  constructor() {
    super(initialState);
  }

  public setDeletingFragment(value = true) {
    this.update({ deletingFragment: value });
  }

  public setSavingFragment(value = true) {
    this.update({ savingFragment: value });
  }
}
