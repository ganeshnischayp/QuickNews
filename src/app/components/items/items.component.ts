import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/item';




@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;

  constructor(private ItemsService: ItemsService) { }

  ngOnInit() {
    // console.log('ngOnInit ran');
    this.ItemsService.getItems().subscribe(items => {
      //console.log(items);
      this.items = items;
    })
  }
  deleteItem(item: Item){
    this.clearState();
    this.ItemsService.deleteItem(item);
  }
  editItem(event, item: Item){
    this.editState = true;
    this.itemToEdit = item;
  }
  updateItem(item: Item){
    this.ItemsService.updateItem(item);
    this.clearState();
  }

  clearState(){
    this.editState = false;
    this.itemToEdit = null;
  }


}
