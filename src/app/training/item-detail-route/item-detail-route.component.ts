import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {Item} from "../item.model";
import {ItemService} from "../training.service";
import {ExpandOperator} from "rxjs/operator/expand";

@Component({
  selector: 'app-detail-route-component',
  templateUrl: './item-detail-route.component.html',
  styleUrls: ['./item-detail-route.component.scss']
})
export class ItemDetailRouteComponent implements OnInit, OnDestroy {

  public item: Item;

  private activatedRouteParamsSubcription: Subscription;

  // By setting private before parm, parm becaase private member automatially
  constructor(private itemService: ItemService, private activatedRoute: ActivatedRoute,
              private router:Router) {}

  ngOnInit() {
    //this.router.navigateByUrl("/item", 2 )

    this.activatedRouteParamsSubcription = this.activatedRoute.params
      .map(params => {
        return parseInt(params['id']);
      })
      .switchMap(id => {
        return this.itemService.getById(id)
      })
      .subscribe(
        item => {
          this.item = item;
        },
        error => {
          console.error(error);
        }
      )
  }

  ngOnDestroy(): void {
    this.activatedRouteParamsSubcription.unsubscribe();
  }

}
