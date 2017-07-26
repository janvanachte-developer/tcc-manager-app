import {Component, OnDestroy, OnInit} from '@angular/core';
import {Item} from "./training/item.model";
import {ItemService} from "./training/training.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'TCC Manager App';
  quote =  'Please select item';
  dateFormat = "yyyy-MMM-dd";

  items: Item[];
  itemSelected: Item;

  private itemService: ItemService;
  private itemsSubscription: Subscription;

  constructor( itemService: ItemService ) {

    this.itemService = itemService;
  }

  ngOnInit(): void {

    const itemsObservable = this.itemService.getAll();
    this.itemsSubscription = itemsObservable.subscribe(items => this.items = items);
  }

  onItemSelected(itemSelected: Item) {

    this.itemSelected = itemSelected;
  }

  ngOnDestroy(): void {
    this.itemsSubscription.unsubscribe();
  }
}
