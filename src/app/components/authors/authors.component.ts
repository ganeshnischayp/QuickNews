import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Author } from '../../models/author';
import { auth } from 'firebase';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: Author[];

  constructor(private ItemsService: ItemsService) { }

  ngOnInit() {
    this.ItemsService.getAuthors().subscribe(authors => {
      console.log(authors);
      this.authors = authors;
    })

  }
}