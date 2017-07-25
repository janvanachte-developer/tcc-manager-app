import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Training} from "../../training/training.model";

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {

  @Input() trainings: Training[];

  @Output() public trainingSelected = new EventEmitter<Training>();

  ngOnInit() {
  }

  onTrainingClicked($event: MouseEvent, training: Training) {

    console.log(`Clicked on ${training.name}`);
    this.trainingSelected.emit(training);
  }
}
