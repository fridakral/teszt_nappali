import { AlkalmazottComponent } from './../alkalmazott/alkalmazott.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { VezetoGuard } from 'src/app/vezeto.guard';
import { AlkalmazottGuard } from 'src/app/alkalmazott.guard';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service:ApiserviceService, public dialog: MatDialog, private route: Router, private vezeto: VezetoGuard, private alkalmazott : AlkalmazottGuard, private user :AppComponent) { }
  

  ngOnInit(): void {
    this.vezeto.isVallalatvezeto=false;
    this.alkalmazott.isAlkalmazott=false;
  }

  
  readData:any;
  readCheckPassword:any;

  loginClick(){

    let username = (<HTMLInputElement>document.getElementById("username")).value;
    let password = (<HTMLInputElement>document.getElementById("password")).value;
    this.service.getDataToLogin(username).subscribe((res)=>{
      this.readData = res.data;

      if(res.data){
        
        this.service.checkPassword(password, res.data[0].jelszo).subscribe((respons)=>{
          this.readCheckPassword = respons.data;
          if(respons.data){
            this.user.user=res.data[0].felhasznalonev;
      
            if(res.data[0 ].jogosultsag == "Vezeto"){
              this.vezeto.isVallalatvezeto=true;
              this.route.navigate(['../vezeto']);
            }
            else if(res.data[0].jogosultsag == "Alkalmazott"){
              this.alkalmazott.isAlkalmazott=true;
              this.route.navigate(['../alkalmazott']);
            }
          }
          else{
            this.dialog.open(DialogComponent);
          }
        })   
      }
      else{
        this.dialog.open(DialogComponent);
      }
    });

  }
}
