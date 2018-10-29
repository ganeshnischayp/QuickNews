import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Item } from '../../models/item';
import { ItemsService } from '../../services/items.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-item-desc',
  templateUrl: './item-desc.component.html',
  styleUrls: ['./item-desc.component.css']
})
export class ItemDescComponent implements OnInit {
  id: any;
  items: Item[];
  profileUrl: Observable<string | null>

  
  constructor(
    private  ItemsService: ItemsService,
    private router: Router,
    private route: ActivatedRoute,
    private storage: AngularFireStorage


  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
     console.log(this.id);

     this.ItemsService.getItemDesc(this.id).subscribe(items => {
      console.log(items);
      this.items = items;
      // console.log("item-desc-component")
      const ref = this.storage.ref(items.image);
      this.profileUrl = ref.getDownloadURL();
      
    })

    // this.ItemsService.getItemDesc(this.id).subscribe(listing => {
    //    this.listing = listing}) 
    // this.ItemsService.getItemDesc(this.id);



     
    
    
  }

}
