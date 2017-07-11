import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { Usuario } from "../../app/models/Usuario";
import { Recibo } from "../../app/models/Recibo";
import * as firebase from 'firebase';
/**
 * Generated class for the ListaRecibosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-lista-recibos',
  templateUrl: 'lista-recibos.html',
})
export class ListaRecibosPage {

   usuario:Usuario;
   recibo:Recibo;
   recibos=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {
     this.usuario=new Usuario();
              this.recibo=new Recibo();
              this.usuario.setId(firebase.auth().currentUser.uid);
              this.cargarRecibos();  
  }

  cargarRecibos()
  {

      this.recibo.getReciboRef().then(snapshot2=>
        { 
          var recibos=this.recibos;
          var i=0;
          snapshot2.forEach(function(childSnapshot) 
                  {               
                  
                    var childData = childSnapshot.val();
                    recibos[i]={
                              fecha:childData.Fecha,
                              monto:childData.Monto,
                             };
                             
                    i++;
                  });
             
        })
  }

}
