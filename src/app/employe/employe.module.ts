import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EmployeRoutingModule } from './employe-routing.module';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    EmployeRoutingModule
  ],
  declarations: []
})
export class EmployeModule { }
