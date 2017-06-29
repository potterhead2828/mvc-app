import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarAnuncioPage } from './editar-anuncio';

@NgModule({
  declarations: [
    EditarAnuncioPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarAnuncioPage),
  ],
  exports: [
    EditarAnuncioPage
  ]
})
export class EditarAnuncioPageModule {}
