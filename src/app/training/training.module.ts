import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingDetailComponent } from './training-detail/training-detail.component';
import {ItemListComponent} from "./training-list/training-list.component";
import {FormsModule} from "@angular/forms";
import {ItemService} from "./training.service";
import {TakePlaceSoon} from "./training-detail/takePlaceSoon";
import { ItemDetailRouteComponent } from './item-detail-route/item-detail-route.component';
import {RouterModule} from "@angular/router";
import {ItemExistGuardService} from "./item-exist-guard.service";

@NgModule({
      imports: [
        CommonModule,
        FormsModule,
        RouterModule
      ],
      declarations: [
        TrainingDetailComponent,
        ItemListComponent,
        TakePlaceSoon,
        ItemDetailRouteComponent
      ],
      providers: [
        ItemService,
        ItemExistGuardService,
  ],
  exports: [
    TrainingDetailComponent,
    ItemDetailRouteComponent,
    ItemListComponent
  ]
})
export class ItemModule { }
