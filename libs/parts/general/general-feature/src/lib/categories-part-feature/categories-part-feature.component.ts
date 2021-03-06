import { Component, OnInit } from '@angular/core';
import { EditPartFeatureBase, EditItemQuery, EditItemService } from '@cadmus/features/edit-state';
import { Router, ActivatedRoute } from '@angular/router';
import { EditCategoriesPartQuery } from './edit-categories-part.query';
import { EditCategoriesPartService } from './edit-categories-part.service';

@Component({
  selector: 'cadmus-categories-part-feature',
  templateUrl: './categories-part-feature.component.html',
  styleUrls: ['./categories-part-feature.component.css']
})
export class CategoriesPartFeatureComponent extends EditPartFeatureBase
  implements OnInit {
    constructor(
      router: Router,
      route: ActivatedRoute,
      editPartQuery: EditCategoriesPartQuery,
      editPartService: EditCategoriesPartService,
      editItemQuery: EditItemQuery,
      editItemService: EditItemService
    ) {
      super(
        router,
        route,
        editPartQuery,
        editPartService,
        editItemQuery,
        editItemService
      );
      this.itemId = route.snapshot.params['iid'];
      this.partId = route.snapshot.params['pid'];
      if (this.partId === 'new') {
        this.partId = null;
      }
      this.roleId = route.snapshot.queryParams['rid'];
    }

    ngOnInit() {
      this.initEditor(['categories']);
    }
  }
