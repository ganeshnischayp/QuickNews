import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { User } from '../../models/user';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  
  user: User;
  postRef: AngularFirestoreDocument<any>;
  post$: Observable<any>;

  constructor(
    public afAuth: AngularFireAuth,
    public flashMessage: FlashMessagesService,
    private router: Router,
    private afs: AngularFirestore,
    public auth: AuthService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
} 
   }

  // login() {
  //   this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  // }


  ngOnInit() {
    // this.postRef = this.afs.doc('');
    // this.post$ = this.postRef.valueChanges()

    this.auth.user$.subscribe(user => this.user = user);
    // setTimeout(() => {
    //   this.router.navigated = false;
    //   this.router.navigate([this.router.url]);
    //   }, 5000);
  }
  editPost() {
    if(this.auth.canEdit(this.user)) {
      console.log('you are admin')
    } 
    else {
      console.error('you are not allowed to do that!')
    }
  
  }
  logout() {
    this.afAuth.auth.signOut();
    this.flashMessage.show("You are logged out", { cssClass: 'alert-success', timeout: 3000 });
    this.router.navigate(['']);
    // window.location.reload();
  }

}
