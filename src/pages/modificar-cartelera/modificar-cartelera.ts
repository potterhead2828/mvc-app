import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";
import { PublicarAnuncioPage } from "../publicar-anuncio/publicar-anuncio";
import { EditarAnuncioPage } from "../editar-anuncio/editar-anuncio";
import { HomePage } from "../home/home";


/**
 * Generated class for the ModificarCarteleraPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modificar-cartelera',
  templateUrl: 'modificar-cartelera.html',
  providers: [HttpProvider]
})
export class ModificarCarteleraPage {
public anuncios=[];
public titulo:any;
public fecha="d";
public texto="x";
public id:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private miProvider:HttpProvider) {

      this.BuscarAnuncios();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModificarCarteleraPage');
  }
irHomePropietario(){

  this.navCtrl.setRoot(HomePage);
}


BuscarAnuncios(){
var that=this;
var i=0;
  this.miProvider.database_cartelera.once('value', function(snapshot) { //Once te devuelve una lista y te permite iterar sobre esa lista
  snapshot.forEach(function(childSnapshot) {//Iteracion sobre la lista snapshot es la raiz, y childSnapshot es cada hijo, cada elemento de la tabla q uno quiere.
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
    that.anuncios[i]={ //leo la tabla de firebase en un arreglo mensajes de este archivo, para que despues el html lea de ese arreglo.
          
          fecha:childData.Fecha,
          texto:childData.Texto,
          titulo:childData.Titulo,
          id:childKey
    };
    i++;

  });
   //console.log("Mensajes-->"+mensajes)
});


}

publicarAnuncio(){

 this.navCtrl.setRoot(PublicarAnuncioPage);

}

editar(anuncio){
console.log("modificar-cartelera.ts--->id:_ "+anuncio.id+"\n"+"fecha:_"+anuncio.fecha+"\n"+"texto:_"+anuncio.texto);
this.navCtrl.push(EditarAnuncioPage,{anuncio:anuncio});
//this.miProvider.modificarAnuncio(anuncio);


}



}
