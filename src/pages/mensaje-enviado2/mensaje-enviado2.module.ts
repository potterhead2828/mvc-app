import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MensajeEnviado2Page } from './mensaje-enviado2';

@NgModule({
  declarations: [
    MensajeEnviado2Page,
  ],
  imports: [
    IonicPageModule.forChild(MensajeEnviado2Page),
  ],
  exports: [
    MensajeEnviado2Page
  ]
})
export class MensajeEnviado2PageModule {}
