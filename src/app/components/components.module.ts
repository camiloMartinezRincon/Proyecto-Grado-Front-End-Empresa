import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderMenuFilterComponent } from './header-menu-filter/header-menu-filter.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderMenuComponent,
    HeaderMenuFilterComponent
  ],
  exports: [
    HeaderComponent,
    HeaderMenuComponent,
    HeaderMenuFilterComponent   
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
