import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingDetailComponent } from './training-detail/training-detail.component';
import {ItemListComponent} from "./training-list/training-list.component";
import {FormsModule} from "@angular/forms";
import {ItemService} from "./training.service";
import {TakePlaceSoon} from "./training-detail/takePlaceSoon";

@NgModule({
      imports: [
        CommonModule,
        FormsModule
      ],
      declarations: [
        TrainingDetailComponent,
        ItemListComponent,
        TakePlaceSoon
      ],
      providers: [
        ItemService
  ],
  exports: [
    TrainingDetailComponent,
    ItemListComponent]
})
export class ItemModule { }
