import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SiteComponent} from './site.component';

const routes: Routes = [
  {path:'site', component: SiteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
