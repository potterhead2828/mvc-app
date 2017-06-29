import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicarReciboPage } from './publicar-recibo';

@NgModule({
  declarations: [
    PublicarReciboPage,
  ],
  imports: [
    IonicPageModule.forChild(PublicarReciboPage),
  ],
  exports: [
    PublicarReciboPage
  ]
})
export class PublicarReciboPageModule {}
