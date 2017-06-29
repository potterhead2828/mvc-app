import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { HttpProvider } from "../../providers/http/http";
import { MensajeEnviadoPage } from "../mensaje-enviado/mensaje-enviado";
/**
 * Generated class for the EnviarMensajePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-enviar-mensaje',
  templateUrl: 'enviar-mensaje.html',
  providers: [HttpProvider]
})
export class EnviarMensajePage {
  public asunto:any;
  public mensaje:any;
  public remitente:any;
  public UserID:any;
  public fecha:any;
  public fech:any;
  public f:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private miProvider:HttpProvider) {
             this.UserID=firebase.auth().currentUser.uid;

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnviarMensajePage');
  }

enviarMensaje(){

this.miProvider.findUser(this.UserID).then(snapshot => {
	
		 //get user photo
		console.log("nombre:_"+snapshot.val().nombre);

     var mensaje={
           Remitente:snapshot.val().nombre+" "+snapshot.val().apellido,
           Asunto:this.asunto,
           Mensaje:this.mensaje,
           Fecha:this.fecha,
           RemitenteID:this.UserID
}
 this.miProvider.enviarMensajeJunta(mensaje);
 this.navCtrl.setRoot(MensajeEnviadoPage);
	});
  


}

}

