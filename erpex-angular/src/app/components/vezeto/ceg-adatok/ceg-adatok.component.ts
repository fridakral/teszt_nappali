import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-ceg-adatok',
  templateUrl: './ceg-adatok.component.html',
  styleUrls: ['./ceg-adatok.component.scss']
})
export class CegAdatokComponent implements OnInit 
{


  constructor(
    private service : ApiserviceService,
    private user : AppComponent
  ) { }
  
readData:any;

  ngOnInit(): void 
  {
      this.service.getCompanyData().subscribe((res)=>
      {
        this.readData = res.data;
    });
  }
}
