import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodDetailsPageRoutingModule } from './food-details-routing.module';

import { FoodDetailsPage } from './food-details.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodDetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [FoodDetailsPage]
})
export class FoodDetailsPageModule {}
