import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Item } from '../../models/item';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item: Item = {
    title: '',
    description: '',
    category: '',
    region: '',
    stream: '',
    image: '',
    language: '',
    datetime: 0
  }

  constructor(
    private ItemsService: ItemsService,
    private router: Router,
    private storage: AngularFireStorage
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.item.title != '' && this.item.description != '') {
      // console.log(this.item.title);
    

      // this.ItemsService.addItem(this.item);
      this.ItemsService.addImage(this.item);
      this.item.title = '';
      this.item.description = '';
      this.item.category = '';
      this.item.stream = '';
      this.item.region = '';
      this.item.image = '';
      this.item.language = '';
      this.item.author = '';
      this.item.datetime = 0;
    };

    this.router.navigate(['item']);
  }
  uploadFile(event) {
    // for (const selectedfile of [(<HTMLInputElement>document.getElementById('image')).files[0]]) {
    //   const path = `${selectedfile.name}`
    //   // const task = this.storage.upload(path, selectedfile);

    // }
    const file = event.target.files[0];
    const filePath = `${file.name}`;
    const task = this.storage.upload(filePath, file);
  }

}
