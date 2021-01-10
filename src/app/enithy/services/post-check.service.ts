import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//Данный сервис вводит запрет на переход к постам, если поле id больше 100 (обще кол-во постов)

export class PostCheckService implements CanActivate{
  constructor() { };
  canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot)
   : Observable <boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     if (+activatedRouteSnapshot.params.id > 100) {
       alert('Posts limit is exceeded!')
       return false
      }
      return true;
     
    
  }
}
