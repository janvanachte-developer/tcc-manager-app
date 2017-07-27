import {Injectable} from '@angular/core';
import {Item} from "./item.model";
import {ITEMS} from "./item.mock";
import {Observable} from "rxjs";
import {ReplaySubject} from "rxjs";
import {Subject} from "rxjs";

@Injectable()
export class ItemService {
  private itemsObservable: Subject<Item[]>;

  constructor() {

    this.itemsObservable = new ReplaySubject<Item[]>(1);
    this.itemsObservable.next(ITEMS);
  }

  getAll(): Observable<Item[]> {
    return this.itemsObservable
  }

  getById(id: number):  Observable<Item> {
    console.log(typeof id);
    return this.getAll()
      .map(items => {
        console.log(items);
        console.log(items.find(t => t.id === id))
        return items.find(t => t.id === id);
      })
      .map(item => {
        if (!item) {
          throw new Error('Unknown Id');
        }
        return item;
      });
  }
}
