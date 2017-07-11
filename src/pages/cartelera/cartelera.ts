import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";
import { Cartelera } from "../../app/models/Cartelera";
/**
 * Generated class for the CarteleraPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-cartelera',
  templateUrl: 'cartelera.html',
  providers: [HttpProvider]
})
export class CarteleraPage {
    
     anuncios=[];
     cartelera:Cartelera;
     
  constructor(public navCtrl: NavController, public navParams: NavParams) 
           {
            this.cartelera=new Cartelera(); 
            this.BuscarAnuncios();
          }


BuscarAnuncios()
{  
  var that=this;
  var i=0;
  this.cartelera.get_bd_cartelera().then(snapshot=> 
       { 
        snapshot.forEach(function(childSnapshot) 
                {
                 var childKey = childSnapshot.key;
                 var childData = childSnapshot.val();
                 that.anuncios[i]={ 
                                   fecha:childData.Fecha,
                                   texto:childData.Texto,
                                   titulo:childData.Titulo,
                                  };
                i++;

                });
        });
}



}
