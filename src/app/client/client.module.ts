import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClientRoutingModule } from './client-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ClientRoutingModule
  ],
  declarations: []
})
export class ClientModule { }
