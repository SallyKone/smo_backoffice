import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DashboardModule} from './dashboard/dashboard.module';
import { EmployeComponent } from './employe/employe.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SiteComponent } from './site/site.component';
import { PointageComponent } from './pointage/pointage.component';
import { ClientComponent } from './client/client.component';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { AddClientComponent } from './add-client/add-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';
import { AddSiteComponent } from './add-site/add-site.component';
import { AddPointageComponent } from './add-pointage/add-pointage.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeComponent,
    LoginComponent,
    SiteComponent,
    PointageComponent,
    ClientComponent,
    AddEmployeComponent,
    AddClientComponent,
    UpdateEmployeComponent,
    AddSiteComponent,
    AddPointageComponent

  ],
  imports: [
    BrowserModule,
    UiModule,
    AppRoutingModule,
    DashboardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
