import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { Subscriber } from '../../models/subscriber';
import { FlashMessagesService } from 'angular2-flash-messages';



@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  subscriber: Subscriber  = {
  name: '',
  email: '',
  address: '',
  number: ''
}

  constructor(
    private ItemsService: ItemsService,
    private router: Router,
    public flashMessage: FlashMessagesService,
    private storage: AngularFireStorage

  ) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.subscriber.name != '' && this.subscriber.email != '' && this.subscriber.address != '' && this.subscriber.number != ''){
      this.ItemsService.addSubscriber(this.subscriber);


    }
    this.flashMessage.show("You are successfully subscriber to our offline mode", { cssClass: 'alert-success', timeout: 6000 });
    this.router.navigate(['']);
  }

}
