import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


/**
 * Generated class for the HomeAdminPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-home-admin',
  templateUrl: 'home-admin.html'
})
@IonicPage()
export class HomeAdminPage {

  modificarCarteleraRoot = 'ModificarCarteleraPage'
  administrarPagosRoot = 'AdministrarPagosPage'
  escribirAPropietarioRoot = 'EscribirAPropietarioPage'
  activarConsultaRoot = 'ActivarConsultaPage'
  buzonAdminRoot='BuzonAdminPage'

  constructor(public navCtrl: NavController) {}

}
