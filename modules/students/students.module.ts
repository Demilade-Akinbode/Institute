import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ViewstudentsComponent } from './viewstudents/viewstudents.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RegisterComponent,
    ViewstudentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RegisterComponent,
    ViewstudentsComponent
  ]
})
export class StudentsModule { }
