import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiModule} from '../ui/ui.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    UiModule
  ],
  declarations: []
})
export class DashboardModule { }
