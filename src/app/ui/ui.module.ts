import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, MenuComponent, FooterComponent,  ContentComponent],
  exports: [ContentComponent, HeaderComponent, MenuComponent, FooterComponent, ContentComponent]
})
export class UiModule { }
