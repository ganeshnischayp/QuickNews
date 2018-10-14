import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Item } from '../models/item';
import { Observable } from 'rxjs/';
import { map } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  itemDoc: AngularFirestoreDocument <Item>;

  constructor(private afs: AngularFirestore) {

    this.itemsCollection = this.afs.collection('items');
    // this.itemsCollection = this.afs.collection('items',ref => ref.orderBy('title','asc'));


    this.items = this.afs.collection('items').snapshotChanges().pipe(
      map(changes => { return changes.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      })})
    )
  }

  getItems(){
    return this.items; 
  }

  addItem(item: Item){
    this.itemsCollection.add(item);
  }

  deleteItem(item: Item){
    this.itemDoc = this.afs.doc(`items/${item.id}`);
    // console.log(this.itemDoc);
    this.itemDoc.delete().then(function() {
      console.log("Successfully deleted");

    });
    // this.itemDoc = this.afs.doc("items/${item.id}");
    // this.itemDoc.set({
      
    // })


  }
  updateItem(item: Item){
    this.itemDoc = this.afs.doc(`items/${item.id}`);
    // console.log(this.itemDoc);
    this.itemDoc.update(item);
  }
}

