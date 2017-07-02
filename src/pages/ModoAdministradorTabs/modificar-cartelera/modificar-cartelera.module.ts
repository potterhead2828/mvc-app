import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModificarCarteleraPage } from './modificar-cartelera';

@NgModule({
  declarations: [
    ModificarCarteleraPage,
  ],
  imports: [
    IonicPageModule.forChild(ModificarCarteleraPage),
  ],
  exports: [
    ModificarCarteleraPage
  ]
})
export class ModificarCarteleraPageModule {}
