import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";

/**
 * Generated class for the MensajeEnviado2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mensaje-enviado2',
  templateUrl: 'mensaje-enviado2.html',
})
export class MensajeEnviado2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MensajeEnviado2Page');
  }
irHomePropietario(){

  this.navCtrl.setRoot(HomePage);
}

}
