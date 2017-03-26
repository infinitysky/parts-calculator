import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DragScrollModule } from 'angular2-drag-scroll';

import { PartsPriceRoutingModule } from './parts-price-routing.module';
import { PartsPriceComponent } from './parts-price.component';

@NgModule({
  imports: [
    DragScrollModule,


    CommonModule,
    FormsModule,
    HttpModule,
    PartsPriceRoutingModule
  ],
  declarations: [PartsPriceComponent]
})
export class PartsPriceModule { }
