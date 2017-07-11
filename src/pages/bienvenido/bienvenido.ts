import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";
import { HomePage } from "../home/home";
import { LoginPage } from "../login/login";
import { Usuario } from "../../app/models/Usuario";

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

   usuario:Usuario;
   nombre;
   apellido;
   //Constructor se ejecuta cuando pagina Bienvenido.html se carga.   
   constructor(public navCtrl: NavController, public params: NavParams) 
         {
          this.usuario=params.get("usuario");
          this.nombre=this.usuario.getNombre();
          this.apellido=this.usuario.getApellido()
         }

  
goLogin()
        {
         this.navCtrl.setRoot(LoginPage);
        }

}
