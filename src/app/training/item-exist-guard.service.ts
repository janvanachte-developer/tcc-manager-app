import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {ItemService} from "./training.service";

@Injectable()
export class ItemExistGuardService implements CanActivate  {

  constructor(private itemService:ItemService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {

    // + means parseInt
    const id = +route.params['id'];

    console.log("GUARD")
    console.log(id);

    const result = this.itemService.getById(id)
      .first()
      .map(() => true)
      .catch(() => Observable.of(false));

    return result;
  }
}
