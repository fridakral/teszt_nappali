import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-ujprojekt',
  templateUrl: './ujprojekt.component.html',
  styleUrls: ['./ujprojekt.component.scss']
})
export class UjprojektComponent implements OnInit {

  constructor( private service: ApiserviceService) { }

  ngOnInit(): void 
  {
  }

  createProject()
  {
    let projektNev = (<HTMLInputElement>document.getElementById("Projektnev")).value;
    let limit = (<HTMLInputElement>document.getElementById("Limit")).value;
    let projektvezeto = (<HTMLInputElement>document.getElementById("Projektvezeto")).value;
    let hatarido = (<HTMLInputElement>document.getElementById("hatarido")).value;
    let megrendeloAdo = (<HTMLInputElement>document.getElementById("megrendeloAdo")).value;
    let projektId: any;

      this.service.createProjectId().subscribe(result=>{
        projektId = result.data;
        console.log(projektId, "Itt");
        
        this.service.createProject(projektId, projektNev, limit, hatarido, projektvezeto, megrendeloAdo).subscribe(res =>
        {
          console.log(projektId, "ott")
          if(projektvezeto)
          {
            this.service.putProjectHeadCount( projektId ,projektvezeto,"IGEN").subscribe((resi) =>
            {
              console.log(projektId, "Meg itt is");
            });

          }
          
          console.log(res);
        })
      });

    //window.location.reload();

  }

}
