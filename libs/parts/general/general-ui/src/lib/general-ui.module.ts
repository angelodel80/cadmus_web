import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MonacoEditorModule } from 'ngx-monaco-editor';
import { MarkdownModule } from 'ngx-markdown';

import { CoreModule } from '@cadmus/core';
import { MaterialModule } from '@cadmus/material';
import { UiModule } from '@cadmus/ui';
import { NotePartComponent } from './note-part/note-part.component';
import { NotePartDemoComponent } from './note-part-demo/note-part-demo.component';
import { TokenTextPartComponent } from './token-text-part/token-text-part.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MonacoEditorModule,
    MarkdownModule,
    // cadmus
    CoreModule,
    MaterialModule,
    UiModule
  ],
  declarations: [
    NotePartComponent,
    NotePartDemoComponent,
    TokenTextPartComponent
  ],
  exports: [
    NotePartComponent,
    NotePartDemoComponent,
    TokenTextPartComponent
  ]
})
export class GeneralUiModule {}
