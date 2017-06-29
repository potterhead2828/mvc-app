import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";
import * as firebase from 'firebase';
/**
 * Generated class for the CarteleraPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cartelera',
  templateUrl: 'cartelera.html',
  providers: [HttpProvider]
})
export class CarteleraPage {
public anuncios=[];
public titulo:any;
public fecha:any;
public texto:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private miProvider:HttpProvider) {
    this.BuscarAnuncios();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarteleraPage');
  }

BuscarAnuncios(){
var that=this;
var i=0;
  this.miProvider.database_cartelera.orderByChild('Fecha').once('value', function(snapshot) { //Once te devuelve una lista y te permite iterar sobre esa lista
  snapshot.forEach(function(childSnapshot) {//Iteracion sobre la lista snapshot es la raiz, y childSnapshot es cada hijo, cada elemento de la tabla q uno quiere.
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
    that.anuncios[i]={ //leo la tabla de firebase en un arreglo mensajes de este archivo, para que despues el html lea de ese arreglo.
          
          fecha:childData.Fecha,
          texto:childData.Texto,
          titulo:childData.Titulo,
    };
    i++;

  });
   //console.log("Mensajes-->"+mensajes)
});


}



}
