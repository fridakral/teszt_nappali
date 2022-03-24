import { AlkalmazottGuard } from './alkalmazott.guard';
import { AlkalmazottComponent } from './components/alkalmazott/alkalmazott.component';
import { VezetoGuard } from './vezeto.guard';
import { VezetoComponent } from './components/vezeto/vezeto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdatokKezeleseComponent } from './components/vezeto/adatok-kezelese/adatok-kezelese.component';
import { LoginComponent } from './components/login/login.component';
import { SzemelyesAdatokComponent } from './components/alkalmazott/szemelyes-adatok/szemelyes-adatok.component';
import { ProjektekKezeleseComponent } from './components/vezeto/projektek-kezelese/projektek-kezelese.component';
import { AlkalmazottProjektekKezeleseComponent } from './components/alkalmazott/projektek-kezelese/projektek-kezelese.component';
import { JelenletiivComponent } from './components/alkalmazott/jelenletiiv/jelenletiiv.component';
import { PartnerekComponent } from './components/vezeto/partnerek/partnerek.component';
import { CegAdatokComponent } from './components/vezeto/ceg-adatok/ceg-adatok.component';
import { ModositasKereseComponent } from './components/alkalmazott/szemelyes-adatok/modositas-kerese/modositas-kerese.component';
import { UjalkalmazottComponent } from './components/vezeto/adatok-kezelese/ujalkalmazott/ujalkalmazott.component';
import { UjprojektComponent } from './components/vezeto/projektek-kezelese/ujprojekt/ujprojekt.component';

import { ErrorComponent } from './components/vezeto/adatok-kezelese/ujalkalmazott/error/error.component';

import { AlkalmazottEditComponent } from './components/vezeto/adatok-kezelese/alkalmazott-kezelese/alkalmazott-edit/alkalmazott-edit.component';
import { FeladatokComponent } from './components/vezeto/feladatok/feladatok.component';
import { AlkalmazottFeladatokComponent } from './components/alkalmazott/alkalmazott-feladatok/alkalmazott-feladatok.component';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'vezeto', component: VezetoComponent, canActivate: [VezetoGuard], children:[
    {path:'projektekkezelese', component: ProjektekKezeleseComponent},
    {path:'adatokkezelese', component: AdatokKezeleseComponent},
    {path:'ujalkalmazott', component: UjalkalmazottComponent},
    {path: 'partnerek', component: PartnerekComponent},
    {path: 'cegadatok', component: CegAdatokComponent},
    {path: 'ujprojekt', component: UjprojektComponent},
    {path: 'alkalmazottedit', component: AlkalmazottEditComponent},
    {path: 'vezetoFeladat', component: FeladatokComponent}
  ]},
  {path:'alkalmazott', component: AlkalmazottComponent, canActivate:[AlkalmazottGuard], children:[
    {path:'adataim', component:SzemelyesAdatokComponent},
    {path:'projektek', component:AlkalmazottProjektekKezeleseComponent},
    {path:'jelenletiiv', component:JelenletiivComponent},
    {path:'modositaskerese', component:ModositasKereseComponent}, 
    {path: 'alkalmazottFeladat', component: AlkalmazottFeladatokComponent}
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
