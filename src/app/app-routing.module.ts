import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent}from './app.component';
import {PartsPriceModule}from './parts-price/parts-price.module';
const routes: Routes = [
  { path: '', redirectTo: 'parts',pathMatch:'full'},
  { path: 'app', component:AppComponent},
  {path:'parts',loadChildren:'./parts-price/parts-price.module#PartsPriceModule'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
