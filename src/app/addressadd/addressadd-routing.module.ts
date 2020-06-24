import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddressaddPage } from './addressadd.page';

const routes: Routes = [
  {
    path: '',
    component: AddressaddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddressaddPageRoutingModule {}
