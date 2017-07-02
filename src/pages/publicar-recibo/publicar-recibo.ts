import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";
import { Recibo } from "../../app/models/Recibo";
import { ReciboPagado } from "../../app/models/ReciboPagado";
import { ImprimirMensajePage } from "../imprimir-mensaje/imprimir-mensaje";
import { CuentaPropietario } from "../../app/models/CuentaPropietario";
import { HomePage } from "../home/home";

/**
 * Generated class for the PublicarReciboPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-publicar-recibo',
  templateUrl: 'publicar-recibo.html',
  providers: [HttpProvider]
})
export class PublicarReciboPage {
   monto;
   mes;
   fecha;
   fech;
   f;
   cuenta:CuentaPropietario;
   FechaPublicacion;
   recibo:Recibo;
   reciboPagado:ReciboPagado;  
  
  //constructor se ejecuta cuando la pagina publicar-recibo.html se carga
  constructor(public navCtrl: NavController, public navParams: NavParams,public miProvider:HttpProvider) 
            {  
               this.cuenta=new CuentaPropietario();
               this.recibo=new Recibo();
               this.reciboPagado=new ReciboPagado;
               this.f=new Date();
               this.fech={
                          dia:this.f.getDate(),
                          mes:this.f.getMonth()+1,
                          ano:this.f.getFullYear()
                         }
               this.fecha=this.fech.dia+"/"+this.fech.mes+"/"+this.fech.ano;
            }

 

publicarRecibo()
{
   var id=this.mes+this.fech.ano;
   this.recibo.setID(id);
   this.recibo.setFecha(this.fecha);
   this.recibo.setMonto(this.monto);
   this.reciboPagado.setDeuda(this.monto);
   var r={
          deuda:this.monto,
          reciboid:id
         }   
   var mensaje="Recibo Publicado Exitosamente"
   this.recibo.crear();
   var that=this;
   var i=0;
   this.reciboPagado.getRecibosPagadosRef().then(snapshot => 
       { //Agregar a la lista de recibos pendientes de cada propietario.
         console.log("snapshot:-"+JSON.stringify(snapshot));
        snapshot.forEach(function(childSnapshot) 
                {
                  var childKey = childSnapshot.key;
                  that.reciboPagado.crear(childKey,r);
                  i++;
                });
   
       });
    i=0;   
    this.cuenta.getCtaPropRef().then(snapshot => 
       { //Agregar la deuda a la cuenta de cada propietario.
        snapshot.forEach(function(childSnapshot) 
                {
                  var childKey = childSnapshot.key;
                  var InfoPago={
                                UserID:childKey,
                                SaldoAFavor:childSnapshot.val().SaldoAFavor,
                                SaldoDeudor:childSnapshot.val().SaldoDeudor-(-that.monto)
                               } 
                  i++;
                  that.cuenta.actualizar(InfoPago);

                });
   
       });    
   this.navCtrl.push(ImprimirMensajePage,{mensaje:mensaje});
}


//Se dirige al homepage del modo propietario
irHomePropietario()
   {
     this.navCtrl.setRoot(HomePage);
   }




}
