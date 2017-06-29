import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicarAnuncioPage } from './publicar-anuncio';

@NgModule({
  declarations: [
    PublicarAnuncioPage,
  ],
  imports: [
    IonicPageModule.forChild(PublicarAnuncioPage),
  ],
  exports: [
    PublicarAnuncioPage
  ]
})
export class PublicarAnuncioPageModule {}
