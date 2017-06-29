import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarteleraPage } from './cartelera';

@NgModule({
  declarations: [
    CarteleraPage,
  ],
  imports: [
    IonicPageModule.forChild(CarteleraPage),
  ],
  exports: [
    CarteleraPage
  ]
})
export class CarteleraPageModule {}
