import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ImprimirMensajePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-imprimir-mensaje',
  templateUrl: 'imprimir-mensaje.html',
})
export class ImprimirMensajePage {
 
 mensaje;

  constructor(public navCtrl: NavController, public params: NavParams) 
  
  {
     this.mensaje=params.get("mensaje");
  }

 

}

