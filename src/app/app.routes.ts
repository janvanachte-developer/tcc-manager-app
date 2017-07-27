import {Routes} from "@angular/router";
import {ItemListComponent} from "./training/training-list/training-list.component";
import {ItemDetailRouteComponent} from "./training/item-detail-route/item-detail-route.component";
import {ItemExistGuardService} from "./training/item-exist-guard.service";

export const routes: Routes = [
  {
    path: "items",
    component: ItemListComponent
  },
  { path: "item/:id",
    component: ItemDetailRouteComponent,
    canActivate: [ItemExistGuardService]
  },
  {
    path: '**',redirectTo: 'items'
  }
]
