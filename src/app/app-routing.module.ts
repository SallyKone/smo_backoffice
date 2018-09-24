import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EmployeComponent} from './employe/employe.component';
import {LoginComponent} from './login/login.component';
import {SiteComponent} from './site/site.component';
import {PointageComponent} from './pointage/pointage.component';
import {ClientComponent} from './client/client.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'employe', component: EmployeComponent},
  {path:'client', component: ClientComponent},
  {path:'site', component: SiteComponent},
  {path:'pointage', component: PointageComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
