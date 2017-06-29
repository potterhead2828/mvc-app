import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdministrarPagosPage } from './administrar-pagos';

@NgModule({
  declarations: [
    AdministrarPagosPage,
  ],
  imports: [
    IonicPageModule.forChild(AdministrarPagosPage),
  ],
  exports: [
    AdministrarPagosPage
  ]
})
export class AdministrarPagosPageModule {}
