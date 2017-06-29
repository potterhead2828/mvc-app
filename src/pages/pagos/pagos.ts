import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";
import { RegitrarPagoPage } from "../regitrar-pago/regitrar-pago";
import { HistorialPagosPage } from "../historial-pagos/historial-pagos";
import { ListaRecibosPage } from "../lista-recibos/lista-recibos";
import * as firebase from 'firebase';
/**
 * Generated class for the PagosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pagos',
  templateUrl: 'pagos.html',
  providers: [HttpProvider]
})
export class PagosPage {

  public SaldoAFavor:number;
  public SaldoDeudor:number;
  public UserID:any;
  public InfoPago:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private miProvider:HttpProvider) {
   this.UserID=firebase.auth().currentUser.uid;
   this.getCuentaPropietario();
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagosPage');
  }

irARegistro(){
 this.navCtrl.push(RegitrarPagoPage,{InfoPago:this.InfoPago});

}

irAHistorial(){
 this.navCtrl.setRoot(HistorialPagosPage);

}

irALista(){
 this.navCtrl.setRoot(ListaRecibosPage);

}

getCuentaPropietario(){

this.miProvider.findUserAccount(this.UserID).then(snapshot => {

      var that=this;
      var i=0;
      this.SaldoAFavor=snapshot.val().SaldoAFavor;
      this.SaldoDeudor=snapshot.val().SaldoDeudor;
      this.InfoPago=
      { SaldoAFavor:that.SaldoAFavor,
        SaldoDeudor:that.SaldoDeudor,
        HistorialPagos:[],//Lista de recibos pagados o no pagados.
        Recibos:[], 
        UserID:that.UserID }

      var recibosPagadosRef=this.miProvider.database_recibospagados.child(this.UserID);
        recibosPagadosRef.once('value').then(snapshot2=>{ 
               
    
              snapshot2.forEach(function(childSnapshot) {//Iteracion sobre la lista snapshot es la raiz, y childSnapshot es cada hijo, cada elemento de la tabla q uno quiere.
    
                   var childKey = childSnapshot.key;
                   var childData = childSnapshot.val();
                   var fecha;
                   var monto;
    
                   that.miProvider.getRecibo(childKey).then(snapshot3=>{
                          fecha=snapshot3.val().Fecha;
                          monto=snapshot3.val().Monto;
                          that.InfoPago.HistorialPagos[i]=
                                                 {  reciboID:childData.reciboid,
                                                    deuda:childData.deuda  };
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