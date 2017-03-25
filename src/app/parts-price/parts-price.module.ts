import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { PartsPriceRoutingModule } from './parts-price-routing.module';
import { PartsPriceComponent } from './parts-price.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    PartsPriceRoutingModule
  ],
  declarations: [PartsPriceComponent]
})
export class PartsPriceModule { }
