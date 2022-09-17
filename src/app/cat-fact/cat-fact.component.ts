import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import { CatFact } from '../catFact';

@Component({
  selector: 'app-cat-fact',
  templateUrl: './cat-fact.component.html',
  styleUrls: ['./cat-fact.component.css']
})
export class CatFactComponent implements OnInit {

  catFact: CatFact = {fact: '', length: 0};

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.getCatFact();
  }

  getCatFact(): void {
    this.catService.getCatFact()
    .subscribe(fact => this.catFact = fact);
  }

}
