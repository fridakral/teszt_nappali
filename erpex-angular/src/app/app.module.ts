import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule} from './mat/material/material.module';
import { HttpClientModule} from '@angular/common/http';
import { ApiserviceService} from './apiservice.service';
import { VezetoComponent } from './components/vezeto/vezeto.component';
import { DialogComponent } from './components/login/dialog/dialog.component';
import { AlkalmazottComponent } from './components/alkalmazott/alkalmazott.component';
import { SzemelyesAdatokComponent } from './components/alkalmazott/szemelyes-adatok/szemelyes-adatok.component';
import { AdatokKezeleseComponent } from './components/vezeto/adatok-kezelese/adatok-kezelese.component';
import { AlkalmazottProjektekKezeleseComponent } from './components/alkalmazott/projektek-kezelese/projektek-kezelese.component';
import { ProjektekKezeleseComponent } from './components/vezeto/projektek-kezelese/projektek-kezelese.component';
import { JelenletiivComponent } from './components/alkalmazott/jelenletiiv/jelenletiiv.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { PartnerekComponent } from './components/vezeto/partnerek/partnerek.component';
import { CegAdatokComponent } from './components/vezeto/ceg-adatok/ceg-adatok.component';
import { DatePipe } from '@angular/common';
import { ModositasKereseComponent } from './components/alkalmazott/szemelyes-adatok/modositas-kerese/modositas-kerese.component';
import { UjalkalmazottComponent } from './components/vezeto/adatok-kezelese/ujalkalmazott/ujalkalmazott.component';
import { UjprojektComponent } from './components/vezeto/projektek-kezelese/ujprojekt/ujprojekt.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContentChild } from '@angular/core';
import { ErrorComponent } from './components/vezeto/adatok-kezelese/ujalkalmazott/error/error.component';

import { AlkalmazottEditComponent } from './components/vezeto/adatok-kezelese/alkalmazott-kezelese/alkalmazott-edit/alkalmazott-edit.component';
import { FeladatokComponent } from './components/vezeto/feladatok/feladatok.component';
import { AlkalmazottFeladatokComponent } from './components/alkalmazott/alkalmazott-feladatok/alkalmazott-feladatok.component';
import { KeresElkuldveComponent } from './components/alkalmazott/szemelyes-adatok/modositas-kerese/keres-elkuldve/keres-elkuldve.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdatokKezeleseComponent,
    ProjektekKezeleseComponent,
    AlkalmazottComponent,
    VezetoComponent,
    DialogComponent,
    AlkalmazottComponent,
    SzemelyesAdatokComponent,
    JelenletiivComponent,
    PartnerekComponent,
    CegAdatokComponent,
    AlkalmazottProjektekKezeleseComponent,
    ModositasKereseComponent,
    UjalkalmazottComponent,
    UjprojektComponent,
    ErrorComponent,
    AlkalmazottEditComponent,
    FeladatokComponent,
    AlkalmazottFeladatokComponent,
    KeresElkuldveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [ApiserviceService,AppComponent, DatePipe],
  bootstrap: [AppComponent],
  entryComponents:[DialogComponent]
})
export class AppModule { }



