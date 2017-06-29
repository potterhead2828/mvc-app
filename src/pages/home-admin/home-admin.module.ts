import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeAdminPage } from './home-admin';
import { ModificarCarteleraPage } from '../modificar-cartelera/modificar-cartelera';

@NgModule({
  declarations: [
    HomeAdminPage,
    ModificarCarteleraPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeAdminPage),
  ]
})
export class HomeAdminPageModule {}
