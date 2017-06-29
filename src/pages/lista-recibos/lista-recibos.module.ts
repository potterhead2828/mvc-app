import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaRecibosPage } from './lista-recibos';

@NgModule({
  declarations: [
    ListaRecibosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaRecibosPage),
  ],
  exports: [
    ListaRecibosPage
  ]
})
export class ListaRecibosPageModule {}
