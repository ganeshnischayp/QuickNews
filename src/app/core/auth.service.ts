import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../models/user';
import * as firebase from 'firebase';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable ,of, observable  } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User>;
  itemDoc: AngularFirestoreDocument <any>;
  itema:Observable<any>;

  user$: Observable<User>;



  // uuid = this.afAuth.authState.pipe(
  //   map(authState => {
  //     if (!authState){
  //       return null;
  //     } else {
  //       return authState.uid
  //     }
  //   })
  // );  

  // isAdmin: Observable<boolean> =  this.uuid.pipe(
  //   switchMap(uuid => {
  //     if(!uuid){
  //       return of(false);
  //     } else {
  //       return this.afs.doc<boolean>('admin/'+uuid ).valueChanges();
  //     }
  //   } )
  // )
  
  constructor(

    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) { 

    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if(user){
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          return of(null)
        }
      })
    )

  }

  googleLogin() {
    const provider = new auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user)
      })
  }

  private updateUserData(user) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      roles: {
        subscriber: true,
        // editor: false,
        // admin: false
      }
    }

    return userRef.set(data, { merge: true })

  }

  signOutt() {
    this.afAuth.auth.signOut().then(() => {
        this.router.navigate(['']);
    });
  }

  
  
  
  
  
  
  
  
  
  
  
  
  canRead(user: User): boolean {
    const allowed = ['admin', 'editor', 'subscriber']
    return this.checkAuthorization(user, allowed)
  }
  
  canEdit(user: User): boolean {
    const allowed = ['admin', 'editor']
    return this.checkAuthorization(user, allowed)
  }
  
  canDelete(user: User): boolean {
    const allowed = ['admin']
    return this.checkAuthorization(user, allowed)
  }
  
  
  
  // determines if user has matching role
  private checkAuthorization(user: User, allowedRoles: string[]): boolean {
    if (!user) return false
    for (const role of allowedRoles) {
      if ( user.roles[role] ) {
        return true
      }
    }
    return false
  }
  

}
