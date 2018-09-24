import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PointageComponent} from './pointage.component';

const routes: Routes = [
  {path:'pointage', component: PointageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PointageRoutingModule { }
