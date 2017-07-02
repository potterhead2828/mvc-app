import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImprimirMensajePage } from './imprimir-mensaje';

@NgModule({
  declarations: [
    ImprimirMensajePage,
  ],
  imports: [
    IonicPageModule.forChild(ImprimirMensajePage),
  ],
  exports: [
    ImprimirMensajePage
  ]
})
export class ImprimirMensajePageModule {}
