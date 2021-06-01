import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderMenuComponent
  ],
  exports: [
    HeaderComponent,
    HeaderMenuComponent 
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
