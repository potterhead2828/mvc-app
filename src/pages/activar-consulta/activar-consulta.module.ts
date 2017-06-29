import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivarConsultaPage } from './activar-consulta';

@NgModule({
  declarations: [
    ActivarConsultaPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivarConsultaPage),
  ],
  exports: [
    ActivarConsultaPage
  ]
})
export class ActivarConsultaPageModule {}
