import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";

/**
 * Generated class for the LeerAnuncioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-leer-anuncio',
  templateUrl: 'leer-anuncio.html',
  providers: [HttpProvider]
})
export class LeerAnuncioPage {
public anuncioID:any;
public titulo:any;
public fecha:any;
public texto:any;
  constructor(public navCtrl: NavController, public params: NavParams, private miProvider:HttpProvider) {
    this.anuncioID=params.get("id");
    this.leerAnuncio();  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeerAnuncioPage');
  }

leerAnuncio(){
var a;
var that=this;
 this.miProvider.findAnuncio(this.anuncioID).then(snapshot => {
	
		that.titulo = snapshot.val().Titulo; 
	   that.fecha= snapshot.val().Fecha;
     that.texto=snapshot.val().Texto; 
	})
console.log("leerAnuncio--->"+" "+this.titulo+" "+this.fecha+" "+this.texto);
}

}
