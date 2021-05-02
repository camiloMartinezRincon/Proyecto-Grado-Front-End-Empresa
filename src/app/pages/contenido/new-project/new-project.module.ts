import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NewProjectPageRoutingModule } from './new-project-routing.module';
import { NewProjectPage } from './new-project.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewProjectPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NewProjectPage]
})
export class NewProjectPageModule {}
