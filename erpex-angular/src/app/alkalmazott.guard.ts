import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiserviceService } from 'src/app/apiservice.service';

@Injectable({
  providedIn: 'root'
})

export class AlkalmazottGuard implements CanActivate {

  //ez is false élesben:

  isAlkalmazott = true;

  canActivate(){
    if(this.isAlkalmazott){
      return true;
    }
    else{
      return false;
    }
  }
}
