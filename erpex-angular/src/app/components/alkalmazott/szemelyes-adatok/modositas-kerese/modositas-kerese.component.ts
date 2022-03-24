import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { AppComponent } from 'src/app/app.component';
import { DatePipe } from '@angular/common';
import { KeresElkuldveComponent } from './keres-elkuldve/keres-elkuldve.component';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modositas-kerese',
  templateUrl: './modositas-kerese.component.html',
  styleUrls: ['./modositas-kerese.component.scss']
})
export class ModositasKereseComponent implements OnInit {

  constructor(
    public datepipe: DatePipe,
    private service : ApiserviceService,
    private user : AppComponent,
    public dialog: MatDialog
  ) { }

  nevFormControl = new FormControl('', [Validators.pattern('[A-Za-zÁáÉéÚúŰűŐőÓóÜüÖö ]*')]);
  szuletesihelyFormControl = new FormControl('', [Validators.pattern('[a-zA-Z ]*[-]*[a-zA-ZÁáÉéÚúŰűŐőÓóÜüÖö ]*')])
  anyanevFormControl = new FormControl('', [Validators.pattern('[a-zA-ZÁáÉéÚúŰűŐőÓóÜüÖö ]*')]);
  szemelyigazolvanyszamFormControl = new FormControl('', [Validators.pattern('[0-9][0-9][0-9][0-9][0-9][0-9][A-Z][A-Z]')]);
  lakcimkartyaszamFormControl = new FormControl('', [Validators.pattern('[0-9][0-9][0-9][0-9][0-9][0-9][A-Z][A-Z]')]);
  adoazonositoFormControl = new FormControl('', [Validators.pattern('[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]')]);
  tajFormControl = new FormControl('', [Validators.pattern('[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]')]);
  jogositvanykategoriaFormControl = new FormControl('', [Validators.maxLength(3)]);
  jogositvanyszamFormControl = new FormControl('', [Validators.pattern('[A-Z][A-Z][0-9][0-9][0-9][0-9][0-9][0-9]')]);
  bankszamlaszamFormControl = new FormControl('', [Validators.pattern('[0-9]*'),  Validators.maxLength(24)]);
  gyermekekszamaFormControl = new FormControl('', [Validators.pattern('[0-9][0-9]*')]);

  
  readData3:any;
  readData2:any;
  readData:any;

  ngOnInit(): void 
  {
    this.service.getDataToLogin(this.user.user).subscribe((res)=>
    {
    console.log(res, "res=>");
    this.readData = res.data;
  });
    
  }

  modositasKerese(){

    this.service.getLeaders().subscribe((result)=>{
      let feladatAz=0;
      let feladatNev = this.user.user + " adatainak módosítása";
      let feladatLeiras = "felhasználó adatmódosítás kérelem";
      let today = new Date();
      let feladatHatarido = this.datepipe.transform(today.setDate(today.getDate() + 10), 'yyyy-MM-dd');
      this.readData2= result.data;

      this.service.putTask(feladatNev, feladatLeiras, feladatHatarido).subscribe((newRes)=>
      {

        this.service.getFeladatAz().subscribe((res2)=>
        {
          this.readData3=res2.data;
          feladatAz= this.readData3[0].feladatAz;

          for(let i =0; i<this.readData2.length; i++)
          {
            this.service.putFeladatKoto(feladatAz, this.readData2[i].felhasznalonev).subscribe((veryNewRes)=>
            {
              this.dialog.open(KeresElkuldveComponent);
            })
          }
        });
      });
    });
  }
}

