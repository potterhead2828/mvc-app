import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegitrarPagoPage } from './regitrar-pago';

@NgModule({
  declarations: [
    RegitrarPagoPage,
  ],
  imports: [
    IonicPageModule.forChild(RegitrarPagoPage),
  ],
  exports: [
    RegitrarPagoPage
  ]
})
export class RegitrarPagoPageModule {}
