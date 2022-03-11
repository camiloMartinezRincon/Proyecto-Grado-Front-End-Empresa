import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { TableReportsComponent } from '../pages/table-reports/table-reports.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderMenuComponent,
    TableReportsComponent

  ],
  exports: [
    HeaderComponent,
    HeaderMenuComponent,
    TableReportsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
