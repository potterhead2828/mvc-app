import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";
import { CarteleraPage } from "../cartelera/cartelera";
import { ModificarCarteleraPage } from "../ModoAdministradorTabs/modificar-cartelera/modificar-cartelera";
import { HomePage } from "../home/home";
import { Cartelera } from "../../app/models/Cartelera";
import * as firebase from 'firebase';

/**
 * Generated class for the PublicarAnuncioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-publicar-anuncio',
  templateUrl: 'publicar-anuncio.html',
  providers: [HttpProvider]
})

export class PublicarAnuncioPage {

  titulo:any;
  texto:any;
  fecha:any;
  fech:any;
  f:any;
  cartelera:Cartelera;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private miProvider:HttpProvider) 
    {
      this.f=new Date();
      this.fech= {
                  dia:this.f.getDate(),
                  mes:this.f.getMonth()+1,
                  ano:this.f.getFullYear()      
                 }
      this.fecha=this.fech.dia+"/"+this.fech.mes+"/"+this.fech.ano;
      this.cartelera=new Cartelera();
    }

//Crea un anuncio y lo publica en la cartelera.
publicarAnuncio()
{
 var anuncio;
 this.fecha=new Date();

     anuncio=
          {
           Titulo:this.titulo,
           Fecha:this.fecha,
           Texto:this.texto
          }
 this.cartelera.crear(anuncio);
 this.navCtrl.setRoot(ModificarCarteleraPage);
}

//Dirige hacia el homepage del modo propietario.
irHomePropietario()
{
  this.navCtrl.setRoot(HomePage);
}



}