import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AppComponent } from 'src/app/app.component';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-szemelyes-adatok',
  templateUrl: './szemelyes-adatok.component.html',
  styleUrls: ['./szemelyes-adatok.component.scss']
})
export class SzemelyesAdatokComponent implements OnInit {

  constructor(
    public datepipe: DatePipe,
    private service : ApiserviceService,
    private user : AppComponent
    ) { }

  readData:any;

  ngOnInit(): void {
    this.service.getDataToLogin(this.user.user).subscribe((res)=>{
      res.data[0].szuletesiIdo = this.datepipe.transform(res.data[0].szuletesiIdo, 'yyyy-MM-dd');
      this.readData = res.data;
    });
    /*
    this.service.getDataToLogin("példapéter").subscribe((res)=>{
      res.data[0].szuletesiIdo = this.datepipe.transform(res.data[0].szuletesiIdo, 'yyyy-MM-dd');
      console.log(res, "res=>");
      this.readData = res.data;
    });
    */
  }
}
