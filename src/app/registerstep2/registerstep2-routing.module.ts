import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Registerstep2Page } from './registerstep2.page';

const routes: Routes = [
  {
    path: '',
    component: Registerstep2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Registerstep2PageRoutingModule {}
