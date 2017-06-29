import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EscribirAPropietarioPage } from './escribir-a-propietario';

@NgModule({
  declarations: [
    EscribirAPropietarioPage,
  ],
  imports: [
    IonicPageModule.forChild(EscribirAPropietarioPage),
  ],
  exports: [
    EscribirAPropietarioPage
  ]
})
export class EscribirAPropietarioPageModule {}
