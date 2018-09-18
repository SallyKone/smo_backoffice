import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DashboardModule} from './dashboard/dashboard.module';
import { EmployeComponent } from './employe/employe.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    AppRoutingModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
