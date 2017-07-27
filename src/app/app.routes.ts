import {Routes} from "@angular/router";
import {ItemListComponent} from "./training/training-list/training-list.component";
import {ItemDetailRouteComponent} from "./training/item-detail-route/item-detail-route.component";

export const routes: Routes = [
  {
    path: "items",
    component: ItemListComponent,
    canActivate: [ItemDetailRouteComponent]
  },
  { path: "item/:id", component: ItemDetailRouteComponent }
]
