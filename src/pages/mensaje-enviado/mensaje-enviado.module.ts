import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MensajeEnviadoPage } from './mensaje-enviado';

@NgModule({
  declarations: [
    MensajeEnviadoPage,
  ],
  imports: [
    IonicPageModule.forChild(MensajeEnviadoPage),
  ],
  exports: [
    MensajeEnviadoPage
  ]
})
export class MensajeEnviadoPageModule {}
