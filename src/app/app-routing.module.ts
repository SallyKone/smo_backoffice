import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EmployeComponent} from './employe/employe.component';
import {LoginComponent} from './login/login.component';
import {SiteComponent} from './site/site.component';
import {PointageComponent} from './pointage/pointage.component';
import {ClientComponent} from './client/client.component';
import {AddEmployeComponent} from './add-employe/add-employe.component';
import {AddClientComponent} from './add-client/add-client.component';
import {UpdateEmployeComponent} from './update-employe/update-employe.component';
import {AddSiteComponent} from './add-site/add-site.component';
import {AddPointageComponent} from './add-pointage/add-pointage.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'employe', component: EmployeComponent},
  {path:'client', component: ClientComponent},
  {path:'site', component: SiteComponent},
  {path:'pointage', component: PointageComponent},
  {path:'add-employe', component: AddEmployeComponent},
  {path:'add-client', component: AddClientComponent},
  {path: 'update-employe', component: UpdateEmployeComponent},
  {path: 'add-site', component: AddSiteComponent},
  {path: 'add-pointage', component: AddPointageComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
