import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodDataService {

  constructor(private _http: HttpClient) { }

  public search(term): Observable<Food[]> {
    return this._http.post(`https://api.nal.usda.gov/fdc/v1/search?api_key=${environment.foodApiKey}`, {
      generalSearchInput: term
    }).pipe(map(response => response['foods']));
  }

  public getDetails(id): Observable<any> {
    return this._http.get(`https://api.nal.usda.gov/fdc/v1/${id}?api_key=${environment.foodApiKey}`);
  }
}
