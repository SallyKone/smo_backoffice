import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointageRoutingModule } from './pointage-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    PointageRoutingModule
  ],
  declarations: []
})
export class PointageModule { }
