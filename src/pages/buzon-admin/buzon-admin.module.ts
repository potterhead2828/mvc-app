import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuzonAdminPage } from './buzon-admin';

@NgModule({
  declarations: [
    BuzonAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(BuzonAdminPage),
  ],
  exports: [
    BuzonAdminPage
  ]
})
export class BuzonAdminPageModule {}
