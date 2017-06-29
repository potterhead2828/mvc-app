import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";
import { CarteleraPage } from "../cartelera/cartelera";
import { ModificarCarteleraPage } from "../modificar-cartelera/modificar-cartelera";
import * as firebase from 'firebase';
import { HomePage } from "../home/home";
/**
 * Generated class for the PublicarAnuncioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-publicar-anuncio',
  templateUrl: 'publicar-anuncio.html',
  providers: [HttpProvider]
})
export class PublicarAnuncioPage {
  public titulo:any;
  public texto:any;
  public fecha:any;
  public fech:any;
  public f:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private miProvider:HttpProvider) {
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
    console.log('ionViewDidLoad PublicarAnuncioPage');
  }

publicarAnuncio(){
 var anuncio;
 this.fecha=new Date();

     anuncio={
           Titulo:this.titulo,
           Fecha:this.fecha,
           Texto:this.texto
            }



 this.miProvider.publicarEnCartelera(anuncio);
 this.navCtrl.setRoot(ModificarCarteleraPage);

}

irHomePropietario(){

  this.navCtrl.setRoot(HomePage);
}

}