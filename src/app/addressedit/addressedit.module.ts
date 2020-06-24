import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddresseditPageRoutingModule } from './addressedit-routing.module';

import { AddresseditPage } from './addressedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddresseditPageRoutingModule
  ],
  declarations: [AddresseditPage]
})
export class AddresseditPageModule {}
