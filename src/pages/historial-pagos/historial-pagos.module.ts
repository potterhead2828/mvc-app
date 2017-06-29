import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistorialPagosPage } from './historial-pagos';

@NgModule({
  declarations: [
    HistorialPagosPage,
  ],
  imports: [
    IonicPageModule.forChild(HistorialPagosPage),
  ],
  exports: [
    HistorialPagosPage
  ]
})
export class HistorialPagosPageModule {}
