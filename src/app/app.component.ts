import {Component} from '@angular/core';
import {Training} from "./training/training.model";
import {TrainingListComponent} from "./trainings/training-list/training-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  trainings: Training[];
  training: Training;

  constructor() {

    this.trainings = [
      new Training("Angular Introduction", "Angular for dummies"),
      new Training("Angular Profesional", "Angular for HelloWorld developers"),
      new Training("Angular Enterprise", "Angular for enterprise developers"),
      new Training("Angular Guru", "Angular for Angular gurus"),
      new Training("Angular Trainer", "Angular for Angular trainers")
    ]
  }

  trainingSelected(training: Training) {

    console.log(`${training.name} selected`);
    this.training = training;
  }

}
