import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MensajeRegistroPage } from './mensaje-registro';

@NgModule({
  declarations: [
    MensajeRegistroPage,
  ],
  imports: [
    IonicPageModule.forChild(MensajeRegistroPage),
  ],
  exports: [
    MensajeRegistroPage
  ]
})
export class MensajeRegistroPageModule {}
