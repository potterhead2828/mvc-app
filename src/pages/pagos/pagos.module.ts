import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagosPage } from './pagos';

@NgModule({
  declarations: [
    PagosPage,
  ],
  imports: [
    IonicPageModule.forChild(PagosPage),
  ],
  exports: [
    PagosPage
  ]
})
export class PagosPageModule {}
