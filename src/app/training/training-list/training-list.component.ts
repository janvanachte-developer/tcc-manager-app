import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Item} from "../item.model";
import {ItemService} from "../training.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class ItemListComponent implements OnInit, OnDestroy {

  //@Input and @Output are fields, so belong at the top of the class declaration
  public items: Item[];
  @Output() public itemInFocus = new EventEmitter<Item>();
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

  ngOnDestroy(): void {
    this.itemsSubscription.unsubscribe();
  }


  onListItemClicked($event: MouseEvent, training: Item) {

    console.log(`Clicked on ${training.name}`);
    this.itemInFocus.emit(training);
    this.itemSelected = training;
  }
}
