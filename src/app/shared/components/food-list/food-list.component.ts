import { Component, Input } from '@angular/core';
import { Food } from '../../models/food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent {

  @Input() foods: Food[] = [];

  constructor() {

  }

}
