import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";
import { HomePage } from "../home/home";
import { Usuario } from "../../app/models/Usuario";
import { BuzonJunta } from "../../app/models/BuzonJunta";
import { ImprimirMensajePage } from "../imprimir-mensaje/imprimir-mensaje";
import { BuzonPropietario } from "../../app/models/BuzonPropietario";

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
         buzonPropietario:BuzonPropietario;
         fecha:any;
         fech:any;
         f:any;

  //Constructor se ejecuta cuando la pagina enviar-mensaje-prop.html se ejecuta
  constructor(public navCtrl: NavController, public params: NavParams) 
         {  
            this.usuario=new Usuario();
            this.buzonJunta= new BuzonJunta();
            this.buzonPropietario=new BuzonPropietario();
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
        this.buzonPropietario.enviarMensajePropietario(mensaje,this.usuario.getId());
        var texto="Su mensaje ha sido enviado exitosamente";
        this.navCtrl.push(ImprimirMensajePage,{mensaje:texto});
     

      }

//Se dirige al homepage del modo propietario.
irHomePropietario()
     {
      this.navCtrl.setRoot(HomePage);
     }

}

