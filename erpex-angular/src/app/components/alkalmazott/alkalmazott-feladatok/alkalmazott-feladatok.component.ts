import { Component, OnInit } from '@angular/core';

import { DatePipe } from '@angular/common';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-alkalmazott-feladatok',
  templateUrl: './alkalmazott-feladatok.component.html',
  styleUrls: ['./alkalmazott-feladatok.component.scss']
})
export class AlkalmazottFeladatokComponent implements OnInit {


  constructor(private service :ApiserviceService, private user : AppComponent,  public datepipe : DatePipe) { }

  readData: any;

  ngOnInit(): void 
  {
    
    this.service.getTasksforUser(this.user.user).subscribe((res)=>
    {
        this.readData = res.data[0];
      for(let i = 0; i < this.readData.length; i++)
      {
        this.readData[i].feladatHatarido = this.datepipe.transform(this.readData[i].feladatHatarido, 'yyyy-MM-dd');
      }
    });

  }

  deleteTask(feladatAz:any){
    this.service.deleteTask(feladatAz).subscribe((res)=>{
      
    })
    window.location.reload();
  }
}
