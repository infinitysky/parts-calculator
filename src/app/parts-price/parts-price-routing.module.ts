import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PartsPriceComponent}from'./parts-price.component';
const routes: Routes = [
  {path:'',component:PartsPriceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartsPriceRoutingModule { }
