import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,
    public flashMessage: FlashMessagesService
    ) { }
  
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
    this.flashMessage.show("You are logged out",{cssClass: 'alert-success',timeout: 3000});
    window.location.reload();
  }

  ngOnInit() {
  }

}
