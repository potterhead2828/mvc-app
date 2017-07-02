import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";
import { Cartelera } from "../../app/models/Cartelera";

/**
 * Generated class for the LeerAnuncioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-leer-anuncio',
  templateUrl: 'leer-anuncio.html',
  providers: [HttpProvider]
})
export class LeerAnuncioPage {

anuncioID:any;
titulo:any;
fecha:any;
texto:any;
cartelera:Cartelera;
  
  //El contrustor se ejecuta cuando se carga la pagina leer-anuncio.html
  constructor(public navCtrl: NavController, public params: NavParams, private miProvider:HttpProvider) 
       {
         this.cartelera=new Cartelera();
         this.anuncioID=params.get("id");
         this.leerAnuncio();
       }

//Muestra el anuncio cuyo titulo fue seleccionado en el homepago modo propietario.
leerAnuncio()
{
 var that=this;
 that.cartelera.buscar(this.anuncioID).then(snapshot => 
  {	
		that.titulo = snapshot.val().Titulo; 
	  that.fecha= snapshot.val().Fecha;
    that.texto=snapshot.val().Texto; 
	})
}

}
