import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";

/**
 * Generated class for the ImprimirMensajePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

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

goBack(){
       this.navCtrl.setRoot(HomePage);
}
 

}

