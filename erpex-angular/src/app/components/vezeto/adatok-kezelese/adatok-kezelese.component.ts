import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { DatePipe } from '@angular/common';
import { Data } from '@angular/router';

export interface PeriodicElement {
  felhasznalonev: string;
  nev: string;
  szuletesiHely: string;
  szuletesiIdo: string;
}

@Component({
  selector: 'app-adatok-kezelese',
  templateUrl: './adatok-kezelese.component.html',
  styleUrls: ['./adatok-kezelese.component.scss']
})
export class AdatokKezeleseComponent implements OnInit {

  constructor(public datepipe : DatePipe, private service:ApiserviceService,) { }

  displayedColumns: string[] = ['felhasznalonev', 'nev', 'szuletesiHely', 'szuletesiIdo'];

  readData:any;



  ngOnInit(): void {
    this.service.getAllData().subscribe((res)=>{
      for(let i = 0; i < res.data.length; i++){
        res.data[i].szuletesiIdo = this.datepipe.transform(res.data[i].szuletesiIdo, 'yyyy-MM-dd');  
        this.readData = res.data;
      }
      console.log(res, "res=>");
    });
    
  }

}
