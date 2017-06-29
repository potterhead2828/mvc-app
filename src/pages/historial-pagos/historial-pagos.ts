import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";
import * as firebase from 'firebase';
/**
 * Generated class for the HistorialPagosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-historial-pagos',
  templateUrl: 'historial-pagos.html',
  providers: [HttpProvider]
})
export class HistorialPagosPage {
 public UserID:any;
 public pagos=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public miProvider:HttpProvider) {

        this.UserID=firebase.auth().currentUser.uid;
        this.cargarPagos();  

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistorialPagosPage');
  }


cargarPagos(){

       console.log("1--"+JSON.stringify(this.pagos));
        this.miProvider.database_pago.child(this.UserID).orderByChild('Fecha').once('value').then(snapshot2=>{ 
          var pagos=this.pagos;
          var i=0;
             console.log("2--"+JSON.stringify(pagos));
             console.log("SNAPSHOT2:_"+JSON.stringify(snapshot2));
              snapshot2.forEach(function(childSnapshot) {//Iteracion sobre la lista snapshot es la raiz, y childSnapshot es cada hijo, cada elemento de la tabla q uno quiere.
                   
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
