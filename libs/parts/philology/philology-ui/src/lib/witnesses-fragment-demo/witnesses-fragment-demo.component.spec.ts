import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@cadmus/material';
import { HAMMER_LOADER } from '@angular/platform-browser';

import { WitnessesFragmentDemoComponent } from './witnesses-fragment-demo.component';
import { WitnessesFragmentComponent } from '../witnesses-fragment/witnesses-fragment.component';
import { UiModule } from '@cadmus/ui';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { MarkdownModule } from 'ngx-markdown';

describe('WitnessesFragmentDemoComponent', () => {
  let component: WitnessesFragmentDemoComponent;
  let fixture: ComponentFixture<WitnessesFragmentDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MonacoEditorModule.forRoot(),
        MarkdownModule.forRoot(),
        MaterialModule,
        UiModule
      ],
      // https://github.com/angular/components/issues/14668
      providers: [
        {
          provide: HAMMER_LOADER,
          useValue: () => new Promise(() => {})
        }
      ],
      declarations: [
        WitnessesFragmentComponent,
        WitnessesFragmentDemoComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitnessesFragmentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
