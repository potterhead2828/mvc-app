import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../../home/home";
import { HttpProvider } from "../../../providers/http/http";
import { PublicarReciboPage } from "../../publicar-recibo/publicar-recibo";

/**
 * Generated class for the AdministrarPagosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-administrar-pagos',
  templateUrl: 'administrar-pagos.html',
  providers: [HttpProvider]
})
export class AdministrarPagosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public miProvider:HttpProvider) 
  {
  }

  
publicarRecibo()
{
   this.navCtrl.setRoot(PublicarReciboPage);
}

verRecibos()
{

}

//Se dirige al homepage del modo propietario
irHomePropietario()
   {
     this.navCtrl.setRoot(HomePage);
   }

}
