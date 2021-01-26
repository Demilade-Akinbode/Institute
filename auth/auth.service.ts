import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore'

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
 user: any;

  constructor(public auth: AngularFireAuth, public router: Router, private afs: AngularFirestore) 
  {
    this.auth.authState.subscribe(user => {
      if (user){
       this.user = user;
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigateByUrl('/admin');
        /*return this.afs.doc<user>(`users/${user.uid}`).valueChanges();*/

      } else {
        localStorage.setItem('user', '');
      }
    });
    
   }


  /*async login(provider: firebase.auth.AuthProvider) {
    var result = await this.auth.signInWithEmailAndPassword(email, password);
    this.router.navigateByUrl('/admin');
    /*this.router.navigate(['admin/list']);
  }*/

  async  loginWithGoogle(){

    const provider = new firebase.auth.GoogleAuthProvider();
    await this.auth.signInWithPopup(provider);
    this.router.navigateByUrl('/admin');

    /* this.router.navigate(['admin/list']); */ 
  }

  async logout(){
  await this.auth.signOut();
  localStorage.removeItem('user');
  this.router.navigate(['admin/login']);
  }










   /*async login(email: string, password: string) {
    var result = await this.afAuth.signInWithEmailAndPassword(email, password)
    this.router.navigate(['admin/list']);
  }

  async sendEmailVerification() {
    //await this.afAuth.sendSignInLinkToEmail(this.user, '')
    this.router.navigate(['admin/verify-email']);
} 


  get isLoggedIn(): boolean {
      let userStr = localStorage.getItem('user');
      if(userStr != null){
        const  user  =  JSON.parse(userStr);
        return user != null;
      }
    return  false;
    }*/

}
