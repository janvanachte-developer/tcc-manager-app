import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingDetailComponent } from './training-detail/training-detail.component';
import {TrainingListComponent} from "./training-list/training-list.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TrainingDetailComponent,
    TrainingListComponent],
  exports: [
    TrainingDetailComponent,
    TrainingListComponent]
})
export class TrainingModule { }
