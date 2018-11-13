import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Item } from '../../models/item';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';




@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.css']
})
export class QueriesComponent implements OnInit {

  items$: Observable<Item[]>;
  items: Observable<Item[]>;

  categoryFilter$: BehaviorSubject<string | null>;
  streamFilter$: BehaviorSubject<string | null>;
  regionFilter$: BehaviorSubject<string | null>;
  languageFilter$: BehaviorSubject<string | null>;
  authorFilter$: BehaviorSubject<string | null>;




  constructor(
    
    private afs: AngularFirestore, 
    ) {

      // this.itemsCollection = this.afs.collection('items')
    this.categoryFilter$ = new BehaviorSubject(null);
    this.streamFilter$ = new BehaviorSubject(null);
    this.regionFilter$ = new BehaviorSubject(null);
    this.languageFilter$ = new BehaviorSubject(null);
    this.authorFilter$ = new BehaviorSubject(null);

    
    this.items = combineLatest(
      this.categoryFilter$,
      this.streamFilter$,
      this.regionFilter$,
      this.languageFilter$,
      this.authorFilter$
    ).pipe(
      switchMap(([category, stream, region, language, author]) =>
        afs.collection<Item>('items', ref => {
          let query: firebase.firestore.CollectionReference | firebase.firestore.Query  = ref;
          if (category) { query = query.where('category', '==', category) };
          if (stream) { query = query.where('stream', '==', stream) };
          if (region) { query = query.where('region', '==', region)};
          if (language) { query = query.where('language', '==', language) };
          if ( author ) { query = query.where('author', '==' , author) };
          return query.orderBy('datetime','desc');
        }).valueChanges()
      )
    );



    // this.items = this.afs.collection('items').snapshotChanges().pipe(
    //   map(changes => { return changes.map(a => {
    //     const data = a.payload.doc.data() as Item;
    //     data.id = a.payload.doc.id;
    //     return data;
    //   })})
    // )


    // this.items = this.afs.collection('items', ref => ref.where('category', '==', 'sports'))
  }

  filterByCategory(category: string | null) {
    this.categoryFilter$.next(category);
  }
    
  filterByStream(stream: string|null) {
    this.streamFilter$.next(stream); 
  }
  filterByRegion(region: string|null) {
    this.regionFilter$.next(region); 
  }
  filterByLanguage(language: string|null) {
    this.languageFilter$.next(language); 
  }
  filterByAuthor(author: string|null) {
    this.authorFilter$.next(author); 
  }
  // sendSports(){
     
  //   this.itemsCollection = this.afs.collection('items', ref => ref.where('category', '==', 'sports'))
  //   return this.itemsCollection
  // }
  ngOnInit() {
  }

}
