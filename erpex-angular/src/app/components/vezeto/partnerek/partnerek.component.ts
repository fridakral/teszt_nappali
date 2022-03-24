import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-partnerek',
  templateUrl: './partnerek.component.html',
  styleUrls: ['./partnerek.component.scss']
})
export class PartnerekComponent implements OnInit {

  constructor(private service:ApiserviceService,) { }

readData: any;

  ngOnInit(): void 
  {
    this.service.getAllPartnerData().subscribe((res)=>
    {
      this.readData = res.data;
    });
  }

}
