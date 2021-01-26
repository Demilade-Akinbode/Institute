import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
//import { AdminModule } from './admin/admin.module';

import { AngularFireAuthModule } from "@angular/fire/auth";
import { AuthService } from './auth/auth.service';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { RegisterComponent } from './modules/students/register/register.component';
import { ViewstudentsComponent } from './modules/students/viewstudents/viewstudents.component';


//import { MatButtonModule } from '@angular/material/button'


var config=  {
  apiKey: "AIzaSyAvvaFCp8gEMWiHLy2bkG7N6HEwnxk6Mso",
  authDomain: "institute1-1026a.firebaseapp.com",
  projectId: "institute1-1026a",
  storageBucket: "institute1-1026a.appspot.com",
  messagingSenderId: "686571919755",
  appId: "1:686571919755:web:d7b37e60c1c9d2c963b78e",
  measurementId: "G-NHMYXBBH6W"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    RegisterComponent,
    ViewstudentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    DefaultModule,
    //MatButtonModule,
    //AdminModule
  ],

  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
