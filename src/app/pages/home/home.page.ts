import { Component, OnInit } from '@angular/core';
import { FoodDataService } from '../../shared/services/food-data.service';
import { take } from 'rxjs/operators';
import { Food } from '../../shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public foods: Food[] = [];
  public term: string = '';

  constructor(private _foodDataService: FoodDataService) {

  }

  ngOnInit() {
    this.searchFood();
  }

  searchFood() {
    this._foodDataService.search(this.term)
    .pipe(take(1))
    .subscribe(foods => {
      this.foods = foods;
    }, err => {
      console.log(err);
    });
  }

}
