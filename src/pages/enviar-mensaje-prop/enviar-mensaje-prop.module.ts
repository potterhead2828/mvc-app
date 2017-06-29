import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnviarMensajePropPage } from './enviar-mensaje-prop';

@NgModule({
  declarations: [
    EnviarMensajePropPage,
  ],
  imports: [
    IonicPageModule.forChild(EnviarMensajePropPage),
  ],
  exports: [
    EnviarMensajePropPage
  ]
})
export class EnviarMensajePropPageModule {}
