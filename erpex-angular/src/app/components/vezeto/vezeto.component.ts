import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { MatDialog } from '@angular/material/dialog';
import { VezetoGuard } from 'src/app/vezeto.guard';

@Component({
  selector: 'app-vezeto',
  templateUrl: './vezeto.component.html',
  styleUrls: ['./vezeto.component.scss']
})
export class VezetoComponent implements OnInit {

  constructor(private service:ApiserviceService, private route:Router, private dialog: MatDialog, private vezeto : VezetoGuard ) { }

  readData:any;

  ngOnInit(): void {

  }
  
  editData(){
    console.log();
  }

  logoutClick(){
    this.route.navigate(['../login'])
  }


  openNav() {
    
    let mySidebar = document.getElementById("mySidebar");
    let main = document.getElementById("main");
    if(mySidebar && main){
        console.log("adatok ==>",  mySidebar.getBoundingClientRect().width);
        if(mySidebar.getBoundingClientRect().width == 0 ){
          mySidebar.style.width = "250px";
          main.style.paddingLeft = "250px";
        }
        else{
          mySidebar.style.width = "0";
          main.style.paddingLeft = "0";
        }

    }

  }


}
