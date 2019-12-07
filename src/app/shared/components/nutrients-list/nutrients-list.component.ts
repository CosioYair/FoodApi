import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-nutrients-list',
  templateUrl: './nutrients-list.component.html',
  styleUrls: ['./nutrients-list.component.scss'],
})
export class NutrientsListComponent implements OnChanges {

  @Input() nutrients: any[] = [];

  constructor() { }

  ngOnChanges() {
    this.nutrients = this.nutrients.map(nutrient => {
      switch (nutrient.nutrient.unitName) {
        case 'mg':
          nutrient.grams = nutrient.amount / 1000;
          break;

        case 'µg':
          nutrient.grams = nutrient.amount / 1e-6;
          break;

        default:
          nutrient.grams = nutrient.amount;
          break;
      }
      return nutrient;
    });
  }

}
