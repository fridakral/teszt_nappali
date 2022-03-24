import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-alkalmazott-edit',
  templateUrl: './alkalmazott-edit.component.html',
  styleUrls: ['./alkalmazott-edit.component.scss']
})
export class AlkalmazottEditComponent implements OnInit {

  constructor(
    private service : ApiserviceService,
  ) { }

  ngOnInit(): void 
  {
  }
}
