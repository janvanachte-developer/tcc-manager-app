import { Component } from '@angular/core';
import {Training} from "./training/training.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  trainings = [
    new Training("Angular Introduction","Angular for dummies"),
    new Training("Angular Profesional","Angular for HelloWorld developers"),
    new Training("Angular Enterprise", "Angular for enterprise developers"),
    new Training("Angular Guru", "Angular for Angular gurus"),
    new Training("Angular Trainer","Angular for Angular trainers")
  ]
}
