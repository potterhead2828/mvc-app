import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";

/**
 * Generated class for the PublicarReciboPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-publicar-recibo',
  templateUrl: 'publicar-recibo.html',
  providers: [HttpProvider]
})
export class PublicarReciboPage {
  public monto;
  public mes;
  public FechaPublicacion;

  constructor(public navCtrl: NavController, public navParams: NavParams,public miProvider:HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicarReciboPage');
  }

publicarRecibo(){

}






}
