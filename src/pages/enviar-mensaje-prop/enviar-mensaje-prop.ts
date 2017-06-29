import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { HttpProvider } from "../../providers/http/http";
import { MensajeEnviado2Page } from "../mensaje-enviado2/mensaje-enviado2";
import { HomePage } from "../home/home";
/**
 * Generated class for the EnviarMensajePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-enviar-mensaje-prop',
  templateUrl: 'enviar-mensaje-prop.html',
  providers: [HttpProvider]
})
export class EnviarMensajePropPage {
  public asunto:any;
  public mensaje:any;
  public remitente:any;
  public userID;
  public fecha:any;
  public fech:any;
  public f:any;
  constructor(public navCtrl: NavController, public params: NavParams, private miProvider:HttpProvider) {
            this.userID=params.get("userID");
            console.log("ID:_enviar mensaje prop"+this.userID);

this.f=new Date();
      console.log("f--->"+this.f.getDate());  
      this.fech={
      dia:this.f.getDate(),
      mes:this.f.getMonth()+1,
      ano:this.f.getFullYear()
      
 }
      this.fecha=this.fech.dia+"/"+this.fech.mes+"/"+this.fech.ano;
      console.log("Hoy es---> "+this.fecha);

  }



enviarMensaje(){

     var mensaje={
           Remitente:"Junta de Condominio",
           Asunto:this.asunto,
           Mensaje:this.mensaje,
           Fecha:this.fecha
}
 this.miProvider.enviarMensajeProp(mensaje,this.userID);
 this.navCtrl.setRoot(MensajeEnviado2Page);

  


}
irHomePropietario(){

  this.navCtrl.setRoot(HomePage);
}

}

