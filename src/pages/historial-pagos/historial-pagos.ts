import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";
import * as firebase from 'firebase';
import { Usuario } from "../../app/models/Usuario";
import { Pago } from "../../app/models/Pago";
/**
 * Generated class for the HistorialPagosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-historial-pagos',
  templateUrl: 'historial-pagos.html',
  providers: [HttpProvider]
})
export class HistorialPagosPage {

   usuario:Usuario;
   pago:Pago;
   pagos=[];
    
   //constructor se ejecuta cuando la pagina historial-pagos.html se carga 
   constructor(public navCtrl: NavController, public navParams: NavParams) 
             {
              this.usuario=new Usuario();
              this.pago=new Pago();
              this.usuario.setId(firebase.auth().currentUser.uid);
              this.cargarPagos();  
            }




cargarPagos()
     {
        this.pago.buscar(this.usuario.getId()).then(snapshot2=>
        { 
          var pagos=this.pagos;
          var i=0;
          snapshot2.forEach(function(childSnapshot) 
                  {               
                    var childKey = childSnapshot.key;
                    var childData = childSnapshot.val();
                    pagos[i]={
                              tipo:childData.Tipo,
                              banco:childData.Banco,
                              concepto:childData.Concepto,
                              monto:childData.Monto,
                              nroRecibo:childData.Referencia,
                              fecha:childData.Fecha
                             };
                    i++;
                  });
             
        })
    }




}
