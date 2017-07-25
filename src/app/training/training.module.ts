import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingDetailComponent } from './training-detail/training-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TrainingDetailComponent],
  exports: [TrainingDetailComponent]
})
export class TrainingModule { }
