import {Injectable} from '@angular/core';
import {Item} from "./item.model";
import {ITEMS} from "./item.mock";
import {Observable} from "rxjs/Observable";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {Subject} from "rxjs/Subject";

@Injectable()
export class ItemService {
  private itemsObservable: Subject<Item[]>;

  constructor() {

    this.itemsObservable = new ReplaySubject<Item[]>(1);
    this.itemsObservable.next(ITEMS);
  }

  getAll(): Observable<Item[]> {
    return this.itemsObservable;
  }
}
