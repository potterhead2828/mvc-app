import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";
import { MensajeEnviado2Page } from "../mensaje-enviado2/mensaje-enviado2";
import { HomePage } from "../home/home";
import { Usuario } from "../../app/models/Usuario";
import { BuzonJunta } from "../../app/models/BuzonJunta";
import * as firebase from 'firebase';

/**
 * Generated class for the EnviarMensajePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-enviar-mensaje-prop',
  templateUrl: 'enviar-mensaje-prop.html',
  providers: [HttpProvider]
})
export class EnviarMensajePropPage {
  
         asunto:any;
         mensaje:any;
         remitente:any;
         usuario:Usuario;
         buzonJunta:BuzonJunta;
         fecha:any;
         fech:any;
         f:any;

  //Constructor se ejecuta cuando la pagina enviar-mensaje-prop.html se ejecuta
  constructor(public navCtrl: NavController, public params: NavParams, private miProvider:HttpProvider) 
         {  
            this.usuario=new Usuario();
            this.buzonJunta= new BuzonJunta();
            this.usuario.setId(params.get("userID"));
            this.f=new Date();
            this.fech={
                       dia:this.f.getDate(),
                       mes:this.f.getMonth()+1,
                       ano:this.f.getFullYear()
                      }
            this.fecha=this.fech.dia+"/"+this.fech.mes+"/"+this.fech.ano;
          }


//enviar mensaje de la junta a un propietario en particular.
enviarMensaje()
     {
        var mensaje={
                     Remitente:"Junta de Condominio",
                     Asunto:this.asunto,
                     Mensaje:this.mensaje,
                     Fecha:this.fecha
                    }
        this.buzonJunta.enviarMensajePropietario(mensaje,this.usuario.getId());
        this.navCtrl.setRoot(MensajeEnviado2Page);

      }

//Se dirige al homepage del modo propietario.
irHomePropietario()
     {
      this.navCtrl.setRoot(HomePage);
     }

}

