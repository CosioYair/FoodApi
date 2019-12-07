import { Component, OnInit } from '@angular/core';
import { FoodDataService } from '../shared/services/food-data.service';
import { take } from 'rxjs/operators';
import { Food } from '../shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public foods: Food[] = [];

  constructor(private _foodDataService: FoodDataService) {

  }

  ngOnInit() {
    this.searchFood('meet');
  }

  searchFood(term) {
    this._foodDataService.search(term)
    .pipe(take(1))
    .subscribe(foods => {
      this.foods = foods;
      console.log(this.foods);
      
    }, err => {
      console.log(err);
    });
  }

}
