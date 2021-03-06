import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { DragScrollModule } from 'angular2-drag-scroll';

import { AppComponent } from './app.component';
import {PartsPriceModule} from './parts-price/parts-price.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PartsPriceModule,

    DragScrollModule,

    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
