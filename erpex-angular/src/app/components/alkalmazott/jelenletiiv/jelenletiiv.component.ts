import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jelenletiiv',
  templateUrl: './jelenletiiv.component.html',
  styleUrls: ['./jelenletiiv.component.scss'],
})
export class JelenletiivComponent implements OnInit {
myDate = Date.now()

  constructor() { }

  ngOnInit(): void {
  }

}
