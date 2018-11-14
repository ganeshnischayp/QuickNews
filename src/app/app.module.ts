import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FlashMessagesModule } from 'angular2-flash-messages';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'item', component: ItemsComponent },
  { path: 'additem', component: AddItemComponent, canActivate: [AdminGuard] },
  { path: 'item/:id', component: ItemDescComponent },
  { path: 'queries', component: QueriesComponent},
  { path: 'queries/:id', component: ItemDescComponent },
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'subscribers', component:ViewSubscribersComponent, canActivate: [AdminGuard] },
  { path: 'authors', component:AuthorsComponent},
  { path: 'erdiagram', component:ErdiagramComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AngularFireAuthModule,
  FlashMessagesModule.forRoot(),
    AngularFireStorageModule,
    CoreModule

  ],
  exports: [RouterModule],
  declarations: [HomeComponent, ItemDescComponent, QueriesComponent, SubscribeComponent, ViewSubscribersComponent,AuthorsComponent, ErdiagramComponent]
})
export class AppRoutingModule { }


import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { HomeComponent } from './components/home/home.component';
import { ItemDescComponent } from './components/item-desc/item-desc.component';
import { CoreModule } from './core/core.module';

import { ItemsService } from './services/items.service';
import { AuthService } from './core/auth.service';

import { AuthGuard } from './core/auth.guard';
import { AdminGuard } from './core/admin.guard';
import { QueriesComponent } from './components/queries/queries.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { ViewSubscribersComponent } from './components/view-subscribers/view-subscribers.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { ErdiagramComponent } from './components/erdiagram/erdiagram.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    HomeComponent,
    NavbarComponent,
    AddItemComponent,
    ItemDescComponent,
    QueriesComponent,
    SubscribeComponent,
    ViewSubscribersComponent,
    AuthorsComponent,
    ErdiagramComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'progress'),
    AngularFirestoreModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FlashMessagesModule.forRoot(),
    CoreModule
  ],
  providers: [ItemsService, AuthService, AuthGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
