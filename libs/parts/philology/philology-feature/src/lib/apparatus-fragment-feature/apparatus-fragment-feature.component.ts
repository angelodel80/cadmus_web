import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EditApparatusFragmentQuery } from './edit-apparatus-fragment.query';
import { EditApparatusFragmentService } from './edit-apparatus-fragment.service';
import {
  EditItemQuery,
  EditItemService,
  EditLayerPartQuery,
  EditLayerPartService,
  EditFragmentFeatureBase,
  AppQuery
} from '@cadmus/features/edit-state';
import { LibraryRouteService } from '@cadmus/core';

@Component({
  selector: 'cadmus-apparatus-fragment-feature',
  templateUrl: './apparatus-fragment-feature.component.html',
  styleUrls: ['./apparatus-fragment-feature.component.css']
})
export class ApparatusFragmentFeatureComponent extends EditFragmentFeatureBase
  implements OnInit {
  constructor(
    router: Router,
    route: ActivatedRoute,
    appQuery: AppQuery,
    editFrQuery: EditApparatusFragmentQuery,
    editFrService: EditApparatusFragmentService,
    editItemQuery: EditItemQuery,
    editItemService: EditItemService,
    editLayersQuery: EditLayerPartQuery,
    editLayersService: EditLayerPartService,
    libraryRouteService: LibraryRouteService
  ) {
    super(
      router,
      route,
      appQuery,
      editFrQuery,
      editFrService,
      editItemQuery,
      editItemService,
      editLayersQuery,
      editLayersService,
      libraryRouteService
    );
  }

  ngOnInit() {
    this.initEditor([
      '!apparatus-tags',
      'apparatus-witnesses',
      'apparatus-authors'
    ]);
  }
}
