import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../item.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.css']
})
export class TrainingDetailComponent implements OnInit {

  @Input() item: Item;
  public form: FormGroup;

  
  ngOnInit() {
    console.log(this.item.nextRun);

    this.form = new FormGroup({
      name: new FormControl(this.item.name),
      description: new FormControl(this.item.description),
      imageUrl: new FormControl(this.item.imageUrl),
      nextRun: new FormControl(this.item.nextRun.toISOString().substr(0,10)),
      active: new FormControl(this.item.active)
    })
  }

  private goToList() {

  }

  onSubmit(event: Event) {
    console.log("SUBMIT button clicked. " + this.form.value.name);

    const item = this.form.value;
    item.nextRun = new Date(item.nextRun);

    Object.assign(this.item, item);
    this.goToList();
  }

  onCancel(event: Event) {
    console.log("CANCEL button clicked.");
  }
}
