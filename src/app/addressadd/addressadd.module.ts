import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressaddPageRoutingModule } from './addressadd-routing.module';

import { AddressaddPage } from './addressadd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddressaddPageRoutingModule
  ],
  declarations: [AddressaddPage]
})
export class AddressaddPageModule {}
