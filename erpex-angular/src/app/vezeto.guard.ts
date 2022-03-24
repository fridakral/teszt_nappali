import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiserviceService } from 'src/app/apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class VezetoGuard implements CanActivate {


  //élesben ez false:
  isVallalatvezeto = true;
  
  canActivate(){

    if(this.isVallalatvezeto){
      return true;
    }
    else{
      return false;
    }

  }
  
}
