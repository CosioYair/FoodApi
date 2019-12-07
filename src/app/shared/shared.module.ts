import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { RouterModule } from '@angular/router';
import { NutrientsListComponent } from './components/nutrients-list/nutrients-list.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FoodListComponent,
    NutrientsListComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FoodListComponent,
    NutrientsListComponent
  ]
})
export class SharedModule { }
