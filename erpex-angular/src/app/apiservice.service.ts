
import { HttpClient } from '@angular/common/http';
import { summaryForJitName } from '@angular/compiler/src/aot/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  //kapcsolat az adatbázissal - alkalmazotti tábla:

  apiUrlalkalmazott = `http://localhost:3000/alkalmazott`;

  //kapcsolat a backenddel - alkalmazott kreálás

  apiUrlalkalmazottKrealas = `http://localhost:3000/alkalmazottkrealas`;

  //kapcsolat az adatbázissal - projekt tábla:

  apiUrlprojektek = `http://localhost:3000/projekt`;

  //kapcsolat a backenddel - a hashelt jelszó összehasonlításához

  apiUrllogin = `http://localhost:3000/log`;

  //kapcsolat az adatbázis cég táblával

  apiUrlceg = `http://localhost:3000/ceg`;

  //kapcsolat az adatbázis partner táblával

  apiUrlPartner = `http://localhost:3000/partner`

  //kapcsolat az adatbázis projekthez rendel táblával

  apiUrlProjekthezRendel = `http://localhost:3000/projekthezrendel`

  //kapcsolat a backenddel felhasznalonev krealas

  apiUrlFelhasznalonevKrealas = `http://localhost:3000/felhasznalonevkrealas`

  // kapcsolat a backenddel - projekt krealas

  apiUrlProjektKrealas = `http://localhost:3000/projektkrealas`

  //kapcsolat a backenddel -projekt id krealas

  apiUrlProjectIdKrealas = `http://localhost:3000/projektidkrealas`

  //kapcsolat az adatbázissal - projektek kötőtábla megcsinálása

  apiUrlPutLeader = `http://localhost:3000/putleader`

  //kapcsolat az adatbázissal - feladatok tábla

  apiUrlFealadatok = `http://localhost:3000/feladatok`

  apiUrlTasksforUser = `http://localhost:3000/TasksforUser`

  //kapcsolat az adatbázissal - projektvezetők kiválasztása

  apiUrlgetLeaders = `http://localhost:3000/getLeaders`

  //kapcsolat a backenddel - feladat létrehozása

  apiUrlputTask = `http://localhost:3000/putTask`

  //kapcsoalat az adatbázissal - feladat kötőtábla feltöltés

  apiUrlFeladathozRendel = `http://localhost:3000/putFeladathozRendel`

  //kapcsolat a backenddel - feladatAz 

  apiUrlgetFeladatAz = `http://localhost:3000/getfeladatAz`

  //feladat törlése

  apiUrldeleteTask = `http://localhost:3000/deleteTask`


  felhasznaloSzemelyesAdat(nev:any, anyaNev:any, szuletesiHely:any, szuletesiIdo:any, allandoLakcim:any, ideiglenesLakcim:any, gyermekekSzama:any)
  {
    let szemelyesAdat: Array<any>;
    szemelyesAdat = [nev, anyaNev, szuletesiHely, szuletesiIdo, allandoLakcim, ideiglenesLakcim, gyermekekSzama];
    
    /* INDEXELÉS:
    0 - nev
    1 - anya neve
    2 - szuletesi hely
    3 - szuletesi ido
    4 - allando lakcim
    5 - idiglenes lakcim (opcionalis)
    6 - gyermekek szama
    */

    return szemelyesAdat;
  }
  
  felhasznaloKartyaAdat(szemelyigSzam:any, lakcimkszam:any, aodazJel:any, tajSzam:any, jogositvanySzam:any, jogositvanyKategoriaSzam:any)
  {
    let kartyaAdat : Array<any>;
    kartyaAdat = [szemelyigSzam, lakcimkszam, aodazJel, tajSzam, jogositvanySzam,jogositvanyKategoriaSzam];

    /*INDEXELÉS:
    0 - szemelyigazolvany szam
    1 - lakcimkartya szam
    2 - adoazonosito jel
    3 - TAJ
    4 - jogositvany szama (opcionalis)
    5 - jogosirtvany kategoriaja (opcionalis)
    */
   return kartyaAdat;
  }

  felhasznaloBankAdat(bankszamlaSzam:any, szamlavezetoBank:any)
  {
    let bankAdat : Array<any>;
    bankAdat = [bankszamlaSzam, szamlavezetoBank];

    /*INDEXELÉS:
    0 - bankszamla szam
    1 - szamlavezeto bank neve
    */
   return bankAdat;
  }

  felhasznaloProgtamAdat(felhasznalonev:any, jelszo:any, beosztas:any, jogosultsag:any, egyeb:any, statusz:any)
  {
    let programAdat : Array<any>;
    programAdat = [felhasznalonev, jelszo, beosztas, jogosultsag, egyeb, statusz]

    /*INDEXELÉS:
    0 - felhasznalonev
    1 - jelszo
    2 - beosztas
    3 - jogosultsag
    4 - egyeb (opcionalis)
    5 - statusz
    */
   
    return programAdat;
  }


  deleteTask(feladatAZ:any) :Observable<any>{
    return this._http.get(`${this.apiUrldeleteTask}`,  {'params': {'feladatAz': feladatAZ}})

  }

  //kapcsolat a backenddel - dátum formázás

  apiUrlformatDate = `http://localhost:3000/formatDate`

  getAllData():Observable<any>{
    return this._http.get(`${this.apiUrlalkalmazott}`);
  }

  editData(felhasznalonev: any, jelszo: any, nev: any, szuletesiHely: any, szuletesiIdo: any, anyaNev: any, allandoLakcim: any, ideiglenesLakcim: any, szemelygszam: any, lakcimszam: any, adoazjel: any, tajSzam: any, bankszamlaszam: any, szamlavezetoBankNev: any, jogositvanyszam: any, jogositvanyKategoriaSzam: any, gyermekekszama: any, beosztas: any, jogosultsag: any, egyeb: any,):Observable<any>{

    return this._http.get(`${this.apiUrlalkalmazott}/${felhasznalonev}`, { 'params': { 'felhasznalonev': felhasznalonev, 'jelszo': jelszo, 'nev': nev, 'szuletesiHely': szuletesiHely, 'szuletesiIdo': szuletesiIdo, 'anyaNev': anyaNev, 'allandoLakcim': allandoLakcim, 'ideiglenesLakcim': ideiglenesLakcim, 'szemelyigSzam': szemelygszam, 'lakcimSzam': lakcimszam, 'adoazJel': adoazjel, 'tajSzam': tajSzam, 'bankszamlaSzam': bankszamlaszam, 'szamlavezetoBankNev': szamlavezetoBankNev, 'jogositvanySzam': jogositvanyszam, 'jogositvanyKategoriaSzam': jogositvanyKategoriaSzam, 'gyermekekSzama': gyermekekszama, 'beosztas': beosztas, 'jogosultsag': jogosultsag, 'egyeb': egyeb}});
  }

  getDataToLogin(felh:any):Observable<any>{
    let felhasznalo = felh;
    return this._http.get(`${this.apiUrlalkalmazott}/${felhasznalo}`);
  }

  createData(data:any):Observable<any>{
    return this._http.post(`${this.apiUrlalkalmazott}`, data);
  }

  getProjects():Observable<any>{
    return this._http.get(`${this.apiUrlprojektek}`);
  }

  checkPassword(password: any, jelszo:any):Observable<any>{
    return this._http.get(`${this.apiUrllogin}`, {'params': {'beirt': password, 'hashelt': jelszo}});
  }

  getCompanyData():Observable<any>
  {
    return this._http.get(`${this.apiUrlceg}`);
  }

  getAllPartnerData():Observable<any>
  {
    return this._http.get(`${this.apiUrlPartner}`);
  }

  getProjectHeadCount():Observable<any>{
    return this._http.get(`${this.apiUrlProjekthezRendel}`);
  }

  editProjectData(data:any, id:any) :Observable<any>
  {
    let projektID=id;
    return this._http.put(`${this.apiUrlprojektek}/${projektID}`, data);
  }

  createNewEmployee(szemelyesAdat:any, kartyaAdat:any, programAdat:any, bankAdat:any): Observable<any> {

    return this._http.get(`${this.apiUrlalkalmazottKrealas}`, { 'params': { 'szemelyesAdat' : szemelyesAdat, 'kartyaAdat' : kartyaAdat, 'programAdat' : programAdat, 'bankAdat' : bankAdat} });
  }

  createUsername(nev:any) :Observable<any>
  {
    return this._http.get(`${this.apiUrlFelhasznalonevKrealas}`, {'params' : {'nev' : nev}});
  }

  createProject(projektAz: any, projektnev: any, limit: any, hatarido: any, projektvezeto: any, megrendeloAdo:any) :Observable<any>
  {
    return this._http.get(`${this.apiUrlProjektKrealas}`, {'params' : {'projektaz': projektAz, 'projektnev': projektnev, 'limit': limit, 'hatarido': hatarido, 'projektvezeto': projektvezeto, 'megrendeloAdo': megrendeloAdo}});
  }

  createProjectId() : Observable<any>
  {
    return this._http.get(`${this.apiUrlProjectIdKrealas}`);
  }

  putProjectHeadCount(projektAz: any, felhasznalonev : any, projektVez: any) :Observable<any>
  {
    return this._http.get(`${this.apiUrlPutLeader}`, {'params' : {'projektAz': projektAz, 'projektVez': projektVez, 'felhasznalonev' : felhasznalonev}});
  }

  getTasks() :Observable<any>
  {
    return this._http.get(`${this.apiUrlFealadatok}`);
  }

  getTasksforUser(user:any) :Observable<any>
  {
    return this._http.get(`${this.apiUrlTasksforUser}`, {'params': {'felhasznalo': user}});
  }
  
  getLeaders() :Observable<any>
  {
    return this._http.get(`${this.apiUrlgetLeaders}`);
  }

  putTask(feladatNev:any, feladatLeiras:any, Hatarido:any) :Observable<any>
  {
     return this._http.get(`${this.apiUrlputTask}`, {'params': {'feladatNev': feladatNev, 'feladatLeiras': feladatLeiras, 'Hatarido': Hatarido}});
  }

  getFeladatAz() :Observable<any>
  {
    return this._http.get(`${this.apiUrlgetFeladatAz}`);
  }

  putFeladatKoto(feladatAz: any, felhasznalonev: any) :Observable<any>
  {
    return this._http.get(`${this.apiUrlFeladathozRendel}`, {'params': {'feladatAz': feladatAz, 'felhasznalonev': felhasznalonev}});
  }
}