import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatSelectModule,
    MatToolbarModule
  ],
  exports: [
    MatDividerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatSelectModule,
    MatToolbarModule
    
  ]
})
export class MaterialModule { }