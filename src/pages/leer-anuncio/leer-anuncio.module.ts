import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeerAnuncioPage } from './leer-anuncio';

@NgModule({
  declarations: [
    LeerAnuncioPage,
  ],
  imports: [
    IonicPageModule.forChild(LeerAnuncioPage),
  ],
  exports: [
    LeerAnuncioPage
  ]
})
export class LeerAnuncioPageModule {}
