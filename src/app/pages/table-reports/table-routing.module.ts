import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableReportsComponent } from './table-reports.component';


const routes: Routes = [
  {
    path: '',
    component: TableReportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableReportsRoutingModule {}
