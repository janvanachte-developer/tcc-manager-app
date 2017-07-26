import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../item.model";

@Component({
  selector: 'app-training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.css']
})
export class TrainingDetailComponent implements OnInit {

  @Input() training: Item;


  ngOnInit() {
  }

}
