import { Injectable } from '@angular/core';
import { CanDeactivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

  //Данный сервис вводит запрет на выход со страницы
export class DeactivatorService implements CanDeactivate<any> {
  constructor() { }
  canDeactivate(component : any)
   : Observable <boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     return confirm('Do you want pass this page?');
   }
}
