import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";
import { HomePage } from "../home/home";
import { LoginPage } from "../login/login";

/**
 * Generated class for the BienvenidoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-bienvenido',
  templateUrl: 'bienvenido.html',
  providers: [HttpProvider]
})
export class BienvenidoPage {
public usuario;
public nombre;
  constructor(public navCtrl: NavController, public params: NavParams, public miProvider:HttpProvider) {
    this.usuario=params.get("usuario");
    this.nombre=this.usuario.nombre;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BienvenidoPage');
  }
goLogin(){
  this.navCtrl.setRoot(LoginPage);

}
}
