import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alkalmazott',
  templateUrl: './alkalmazott.component.html',
  styleUrls: ['./alkalmazott.component.scss']
})
export class AlkalmazottComponent implements OnInit {

  adatok = false;
  projektek = false;
  jelenleti = false;


  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    let mySidebar = document.getElementById("mySidebar");
    let main = document.getElementById("main");
    if(mySidebar && main){
      if(mySidebar.getBoundingClientRect().width == 0 ){
        mySidebar.style.width = "250px";
        main.style.paddingLeft = "250px";
      }
      else{
        mySidebar.style.width = "0";
        main.style.paddingLeft = "0";
      }
    }
  }

  sajatadatok(){
    this.adatok = true;
    this.projektek=false;
    this.jelenleti=false;
  }

}
