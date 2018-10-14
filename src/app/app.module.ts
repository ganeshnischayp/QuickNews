import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from  '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FlashMessagesModule } from 'angular2-flash-messages';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'item', component: ItemsComponent },
  { path: 'additem', component: AddItemComponent },
  { path: 'item/:id', component: ItemDescComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AngularFireAuthModule,
    FlashMessagesModule.forRoot()
      
  ],
  exports: [RouterModule],
  declarations: [HomeComponent, ItemDescComponent]
})
export class AppRoutingModule {}


import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemsService } from './services/items.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { HomeComponent } from './components/home/home.component';
import { ItemDescComponent } from './components/item-desc/item-desc.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    HomeComponent,
    NavbarComponent,
    AddItemComponent,
    ItemDescComponent 
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase,'progress'),
    AngularFirestoreModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireAuthModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
