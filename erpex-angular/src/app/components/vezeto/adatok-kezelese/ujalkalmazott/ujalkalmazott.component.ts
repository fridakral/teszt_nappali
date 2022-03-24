import { ErrorComponent } from './error/error.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContentChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
//import { profile } from 'console';


@Component({
  selector: 'app-ujalkalmazott',
  templateUrl: './ujalkalmazott.component.html',
  styleUrls: ['./ujalkalmazott.component.scss']
})

export class UjalkalmazottComponent implements OnInit {
  
  nevFormControl = new FormControl('', [Validators.required, Validators.pattern('[A-Za-zÁáÉéÚúŰűŐőÓóÜüÖö ]*')]);
  jelszoFormControl = new FormControl('', [Validators.required]);
  szuletesihelyFormControl = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*[-]*[a-zA-ZÁáÉéÚúŰűŐőÓóÜüÖö ]*')]);
  szuletesiidoFormControl = new FormControl('', [Validators.required]);
  anyanevFormControl = new FormControl('', [Validators.required, Validators.pattern('[a-zA-ZÁáÉéÚúŰűŐőÓóÜüÖö ]*')]);
  allandolakcimFormControl = new FormControl('', [Validators.required]);
  szemelyigazolvanyszamFormControl = new FormControl('', [Validators.required, Validators.pattern('[0-9][0-9][0-9][0-9][0-9][0-9][A-Z][A-Z]')]);
  lakcimkartyaszamFormControl = new FormControl('', [Validators.required, Validators.pattern('[0-9][0-9][0-9][0-9][0-9][0-9][A-Z][A-Z]')]);
  adoazonositoFormControl = new FormControl('', [Validators.required, Validators.pattern('[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]')]);
  tajFormControl = new FormControl('', [Validators.required, Validators.pattern('[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]')]);
  jogositvanykategoriaFormControl = new FormControl('', [Validators.maxLength(3)]);
  jogositvanyszamFormControl = new FormControl('', [Validators.pattern('[A-Z][A-Z][0-9][0-9][0-9][0-9][0-9][0-9]')]);
  szamlavezetobankFormControl = new FormControl('', [Validators.required]);
  bankszamlaszamFormControl = new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(16), Validators.maxLength(24)]);
  gyermekekszamaFormControl = new FormControl('', [Validators.required, Validators.pattern('[0-9][0-9]*')]);
  jogosultsagFormControl = new FormControl('', Validators.required); 


  constructor(private service: ApiserviceService, public error: MatDialog) { }

  ngOnInit(): void {
  }

  readData:any;

  createEmployee()
    {

      let felhasznalonev;

      if(this.nevFormControl.hasError('required')==true || this.jelszoFormControl.hasError('required')==true || this.szuletesihelyFormControl.hasError('required')==true || this.anyanevFormControl.hasError('required')==true || this.allandolakcimFormControl.hasError('required')==true || this.szemelyigazolvanyszamFormControl.hasError('required')==true || this.lakcimkartyaszamFormControl.hasError('required')==true || this.adoazonositoFormControl.hasError('required')==true || this.tajFormControl.hasError('required')==true || this.gyermekekszamaFormControl.hasError('required')==true || this.jogosultsagFormControl.hasError('required')==true || this.bankszamlaszamFormControl.hasError('required')==true || this.gyermekekszamaFormControl.hasError('required')==true){
        this.error.open(ErrorComponent);
      }
      else{
        let nev = (<HTMLInputElement>document.getElementById("teljesNev")).value;
        let jelszo = (<HTMLInputElement>document.getElementById("jelszo")).value;
        let szuletesiHely = (<HTMLInputElement>document.getElementById("szuletesiHely")).value;
        let szuletesiIdo= (<HTMLInputElement>document.getElementById("szuletesiIdo")).value;
        let anyaNev = (<HTMLInputElement>document.getElementById("anyjaNeve")).value;
        let allandoLakcim = (<HTMLInputElement>document.getElementById("allandoLakcim")).value;
        let ideiglenesLakcim = (<HTMLInputElement>document.getElementById("ideiglenesLakcim")).value;
        let szemelyigSzam = (<HTMLInputElement>document.getElementById("szemelyigazolvanySzam")).value;
        let lakcimkSzam = (<HTMLInputElement>document.getElementById("lakcimkartyaSzam")).value;
        let adoazJel = (<HTMLInputElement>document.getElementById("adoazonositoJel")).value;
        let tajSzam = (<HTMLInputElement>document.getElementById("tajSzam")).value;
        let jogositvanyKategoriaSzam = (<HTMLInputElement>document.getElementById("jogositvanyKategoria")).value;
        let jogositvanySzam = (<HTMLInputElement>document.getElementById("jogositvanySzam")).value;
        let szamlavezetoBankNev = (<HTMLInputElement>document.getElementById("szamlavezetoBankNeve")).value;
        let bankszamlaSzam = (<HTMLInputElement>document.getElementById("bankszamlaszam")).value;
        let gyermekekSzama = (<HTMLInputElement>document.getElementById("gyermekekSzama")).value;
        let beosztas = (<HTMLInputElement>document.getElementById("beosztas")).value;
        let jogosultsag = this.jogositvanyszamFormControl.value;
        let egyeb = "";

        
        
        this.service.createUsername(nev).subscribe(result => {
        felhasznalonev = result.data;

        let szemelyesAdat = this.service.felhasznaloSzemelyesAdat(nev, anyaNev, szuletesiHely, szuletesiIdo, allandoLakcim, ideiglenesLakcim, gyermekekSzama);
        let programAdat = this.service.felhasznaloProgtamAdat(felhasznalonev, jelszo, beosztas, jogosultsag, egyeb, 1);
        let kartyaAdat = this.service.felhasznaloKartyaAdat(szemelyigSzam, lakcimkSzam, adoazJel, tajSzam, jogositvanySzam, jogositvanyKategoriaSzam);
        let bankAdat = this.service.felhasznaloBankAdat(bankszamlaSzam, szamlavezetoBankNev);
        
        this.service.createNewEmployee(szemelyesAdat, kartyaAdat, programAdat, bankAdat).subscribe((res)=>
            {
          });
        });



      window.location.reload();
      }
  }
}

