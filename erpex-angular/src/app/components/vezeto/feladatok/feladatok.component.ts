import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-feladatok',
  templateUrl: './feladatok.component.html',
  styleUrls: ['./feladatok.component.scss']
})
export class FeladatokComponent implements OnInit {

  constructor( private service : ApiserviceService, public datepipe :DatePipe) { }

  readData:any;

  ngOnInit(): void 
  {
    this.service.getTasks().subscribe((res)=>
    {
      for (let i = 0; i < res.data.length; i++) {
        res.data[i].feladatHatarido = this.datepipe.transform(res.data[i].feladatHatarido, 'yyyy-MM-dd');
      }
        this.readData = res.data;
    });
  }

}
