import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";
import { RegitrarPagoPage } from "../regitrar-pago/regitrar-pago";
import { HistorialPagosPage } from "../historial-pagos/historial-pagos";
import { ListaRecibosPage } from "../lista-recibos/lista-recibos";
import * as firebase from 'firebase';
import { Recibo } from "../../app/models/Recibo";
import { ReciboPagado } from "../../app/models/ReciboPagado";
import { Usuario } from "../../app/models/Usuario";
import { CuentaPropietario } from "../../app/models/CuentaPropietario";
/**
 * Generated class for the PagosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pagos',
  templateUrl: 'pagos.html',
  providers: [HttpProvider]
})
export class PagosPage {
  SaldoAFavor;
  SaldoDeudor;
  InfoPago:any;
  recibo:Recibo;
  reciboPagado:ReciboPagado;
  usuario:Usuario;
  cuenta:CuentaPropietario;

  constructor(public navCtrl: NavController, public navParams: NavParams) 
   { 
     this.usuario=new Usuario();
     this.recibo=new Recibo();
     this.reciboPagado=new ReciboPagado();
     this.usuario.setId(firebase.auth().currentUser.uid);
     this.cuenta=new CuentaPropietario();
     this.getCuentaPropietario();
   }

 

irARegistro()
{
 this.navCtrl.push(RegitrarPagoPage,{InfoPago:this.InfoPago});
}

irAHistorial()
{
 this.navCtrl.setRoot(HistorialPagosPage);
}

irALista()
{
 this.navCtrl.setRoot(ListaRecibosPage);
}

getCuentaPropietario()
{
     this.cuenta.buscar(this.usuario.getId()).then(snapshot => 
         {
           var that=this;
           var i=0;
           this.cuenta.setSaldoAFavor(snapshot.val().SaldoAFavor);
           this.cuenta.setSaldoDeudor(snapshot.val().SaldoDeudor);
           this.InfoPago={ 
                          SaldoAFavor:snapshot.val().SaldoAFavor,
                          SaldoDeudor:snapshot.val().SaldoDeudor,
                          HistorialPagos:[],//Lista de recibos pagados o no pagados.
                          Recibos:[], 
                          UserID:that.usuario.getId() 
                         }
           this.SaldoAFavor=snapshot.val().SaldoAFavor,
           this.SaldoDeudor=snapshot.val().SaldoDeudor, 
             that.reciboPagado.buscar(this.usuario.getId()).then(snapshot2=>
                 {          console.log("snapshot2:_"+JSON.stringify(snapshot2));
                   snapshot2.forEach(function(childSnapshot) 
                            {
                            
                              var childData = childSnapshot.val();
                              var fecha;
                              var monto;
                              that.recibo.Buscar(childSnapshot.val().reciboid).then(snapshot3=>
                                  {
                                   console.log("snapshot3:_"+JSON.stringify(snapshot3)); 
                                   fecha=snapshot3.val().Fecha;
                                   monto=snapshot3.val().Monto;
                                   that.InfoPago.HistorialPagos[i]={  
                                                                    reciboID:childData.reciboid,
                                                                    deuda:childData.deuda  
                                                                   };
                                   that.InfoPago.Recibos[i]={
                                                             fecha:fecha,
                                                             monto:monto 
                                                            }                           
                                   i++;
                                  })
                              });
                   })
});

}
//______________________________________________________________________________________________________________________


}