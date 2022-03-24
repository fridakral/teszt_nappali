import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { MatTableModule} from '@angular/material/table';
import { MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule
  ],
  exports: [
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
