import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodDataService } from 'src/app/shared/services/food-data.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.page.html',
  styleUrls: ['./food-details.page.scss'],
})
export class FoodDetailsPage implements OnInit {

  private _foodId: string = '';
  public foodDetails: any = {};

  constructor(private _route: ActivatedRoute, private _foodDataService: FoodDataService) { }

  ngOnInit() {
    this._foodId = this._route.snapshot.paramMap.get('id');
    this._foodDataService.getDetails(this._foodId)
    .pipe(take(1))
    .subscribe(details => {
      this.foodDetails = details;
    }, err => {
      console.log(err);
    })
  }

}
