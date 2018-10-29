import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/core/auth.service';







@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,
    public flashMessage: FlashMessagesService,
    public auth: AuthService
  ) { }

  
  
  // login() {
  //   this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  // }

  ngOnInit() {
  }

}
