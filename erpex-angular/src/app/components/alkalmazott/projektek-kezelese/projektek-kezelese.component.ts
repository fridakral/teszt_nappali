import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';


@Component({
  selector: 'app-projektek-kezelese',
  templateUrl: './projektek-kezelese.component.html',
  styleUrls: ['./projektek-kezelese.component.scss']
})
export class AlkalmazottProjektekKezeleseComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  displayedColumns: string[] = ['projektNev', 'szamlalo', 'maxLetszam', 'projektvezeto'];

  readData: any;
  
  ngOnInit(): void 
  {
    this.service.getProjectHeadCount().subscribe((result)=>{
      
      this.service.getProjects().subscribe((res)=>{
      this.readData = res.data;
      
      for (let i = 0; i < res.data.length; i++){
        let szamlalo = 0;
        for(let j = 0; j < result.data.length; j++){
          if(result.data[j].projektAz == res.data[i].projektAz){
            
            szamlalo++;
            if(result.data[j].vezeto == "IGEN")
            {
              res.data[i].projektVezeto = result.data[j].felhasznalonev;
            }
            else
            {
              res.data[i].projektVezeto = "Kiválasztás alatt";
            }      
          }
        }
        res.data[i].szamlalo = szamlalo;
      }
      this.readData = res.data;
      });
    })
  }
}
