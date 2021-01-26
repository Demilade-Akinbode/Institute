import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { EmailValidator } from '@angular/forms';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { StudentsComponent } from './modules/students/students.component';
import { RegisterComponent } from './modules/students/register/register.component';
import { ViewstudentsComponent } from './modules/students/viewstudents/viewstudents.component';



const routes: Routes = [
  //{ path: 'login', component:LoginComponent},
  { path: '', component:DefaultComponent, 
  children: [{
    path: '', 
    component:DashboardComponent
  },
  {
    path: 'students', 
    component:StudentsComponent,
  },
  {
    path: 'register-student', 
    component:RegisterComponent,
  },
  {
    path: 'view-students', 
    component:ViewstudentsComponent,
  },
  
] 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
