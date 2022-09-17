import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  items = ['item1', 'item2', 'item3', 'item4'];

  currentItem = 'Fork';

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: string) {
    this.items.push(newItem);
    this.currentItem = newItem;
  }

  crossOffItem(deletingItem: string) {
    this.items = this.items.filter(item => item != deletingItem);
  }

}
