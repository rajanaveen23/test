import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAddressComponent } from './add-address.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [AddAddressComponent],
  exports: [
    AddAddressComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AddAddressComponentModule { }
