import {Component} from '@angular/core';
import {Training} from "./training/training.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TCC Manager App';
  quote: 'Please select item';

  trainings: Training[];
  trainingSelected: Training;

  constructor() {

    this.trainings = [
      new Training("Angular Introduction", "Angular for dummies","assets/images/keyboard01.jpeg"),
      new Training("Angular Profesional", "Angular for HelloWorld developers","assets/images/keyboard02.jpeg"),
      new Training("Angular Enterprise", "Angular for enterprise developers","assets/images/keyboard03.jpeg"),
      new Training("Angular Guru", "Angular for Angular gurus","assets/images/keyboard04.jpeg", false),
      new Training("Angular Trainer", "Angular for Angular trainers","assets/images/keyboard05.jpeg")
    ]
  }

  onTrainingSelected(trainingSelected: Training) {

    this.trainingSelected = trainingSelected;
  }

}
