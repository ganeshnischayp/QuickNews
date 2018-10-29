import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';

import { Subscriber } from '../../models/subscriber';


@Component({
  selector: 'app-view-subscribers',
  templateUrl: './view-subscribers.component.html',
  styleUrls: ['./view-subscribers.component.css']
})
export class ViewSubscribersComponent implements OnInit {
  subscribers: Subscriber[];
  constructor(private ItemsService: ItemsService) { }

  ngOnInit() {
    this.ItemsService.getSubscribes().subscribe(subscribers => {
      console.log(subscribers);
      this.subscribers = subscribers;
  });

}
}
