import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnviarMensajePage } from './enviar-mensaje';

@NgModule({
  declarations: [
    EnviarMensajePage,
  ],
  imports: [
    IonicPageModule.forChild(EnviarMensajePage),
  ],
  exports: [
    EnviarMensajePage
  ]
})
export class EnviarMensajePageModule {}
