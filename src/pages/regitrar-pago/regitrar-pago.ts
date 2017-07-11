import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";
import * as firebase from 'firebase';
import { Usuario } from "../../app/models/Usuario";
import { Pago } from "../../app/models/Pago";
import { CuentaPropietario } from "../../app/models/CuentaPropietario";
import { Recibo } from "../../app/models/Recibo";
import { ReciboPagado } from "../../app/models/ReciboPagado";
import { ImprimirMensajePage } from "../imprimir-mensaje/imprimir-mensaje";
/**
 * Generated class for the RegitrarPagoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-regitrar-pago',
  templateUrl: 'regitrar-pago.html',
  providers: [HttpProvider]
})
export class RegitrarPagoPage {

   
   monto:number;
   banco:any;
   formaPago:any;
   nroRecibo:any;
   concepto:any;
   fecha:any;
   fech:any;
   f:any;
   InfoPago:any;
   usuario:Usuario;
   pago:Pago;
   cuenta:CuentaPropietario;
   recibo:Recibo;
   reciboPagado:ReciboPagado;

  constructor(public navCtrl: NavController, public params: NavParams) 
        {
          this.usuario=new Usuario();
          this.usuario.setId(firebase.auth().currentUser.uid);
          this.pago=new Pago();
          this.recibo=new Recibo();
          this.reciboPagado=new ReciboPagado();
          this.cuenta=new CuentaPropietario();
          this.f=new Date();
          this.fech={
                     dia:this.f.getDate(),
                     mes:this.f.getMonth()+1,
                     ano:this.f.getFullYear()
                    }
          this.fecha=this.fech.dia+"/"+this.fech.mes+"/"+this.fech.ano;
          //toda la informacion de pago del usuario viene de pago.ts
          this.InfoPago=params.get("InfoPago");
    
        }


registrarPago()
{ //AL SUMAR SE CONCATENAN LAS COSAS COMO STRINGS.
  //SOLO RESTANDO SE INTERPRETA LAS VARIABLES COMO NUMEROS Y NO COMO STRINGS
  //ASI QUE SI QUIERO SUMAR 2+2, DEBO COLOCAR-->2-(-2)

  var deudaTotal:number;
  var saldoAFavor:number;
  var deudaRecibo:number;
  var pago;
  deudaTotal=this.InfoPago.SaldoDeudor;
  saldoAFavor=this.InfoPago.SaldoAFavor-(-this.monto);
  if (saldoAFavor<deudaTotal)
      { 
         pago={ 
                  Monto:saldoAFavor,
                  Banco:this.banco,
                  Tipo:this.formaPago,
                  Concepto:"Pago parcial",
                  Referencia:this.nroRecibo,
                  PropietarioID:this.usuario.getId(),
                  Fecha:this.fecha
                 }
        deudaTotal=deudaTotal-saldoAFavor; 
        for(var i=0;i<this.InfoPago.HistorialPagos.length;i++)
               {
                deudaRecibo=this.InfoPago.HistorialPagos[i].deuda; 
                if (saldoAFavor<deudaRecibo)
                   {
                     deudaRecibo=deudaRecibo-saldoAFavor;
                     saldoAFavor=0;
                     this.InfoPago.HistorialPagos[i].deuda=deudaRecibo; 
                                   }
                if (saldoAFavor==deudaRecibo)
                    {
                      deudaRecibo=0;
                      saldoAFavor=0;
                      this.InfoPago.HistorialPagos[i].deuda=deudaRecibo;   
                     }
                if (saldoAFavor>deudaRecibo)
                     {
                       saldoAFavor=saldoAFavor-deudaRecibo;
                       deudaRecibo=0;
                       this.InfoPago.HistorialPagos[i].deuda=deudaRecibo;  
                      }         
                  }
       
}
  if (saldoAFavor==deudaTotal)
     {
        pago={
                 Monto:saldoAFavor,
                 Banco:this.banco,
                 Tipo:this.formaPago,
                 Concepto:"Pago total",
                 Referencia:this.nroRecibo,
                 PropietarioID:this.usuario.getId(),
                 Fecha:this.fecha
                }
       deudaTotal=deudaTotal-saldoAFavor;
       saldoAFavor=0;
       for(var i=0;i<this.InfoPago.HistorialPagos.length;i++)
          {
             deudaRecibo=0;
             this.InfoPago.HistorialPagos[i].deuda=deudaRecibo;   
          }
      }
  if (saldoAFavor>deudaTotal)
      {
         pago={
                  Monto:this.monto,
                  Banco:this.banco,
                  Tipo:this.formaPago,
                  Concepto:"Saldo a favor",
                  Referencia:this.nroRecibo,
                  PropietarioID:this.usuario.getId(),
                  Fecha:this.fecha
                  }
        saldoAFavor=saldoAFavor-deudaTotal;
        deudaTotal=0;
      for(var i=0;i<this.InfoPago.HistorialPagos.length;i++)
         {
              deudaRecibo=0;
              this.InfoPago.HistorialPagos[i].deuda=deudaRecibo;   
         }
      }

    this.InfoPago.SaldoDeudor=deudaTotal;
    this.InfoPago.SaldoAFavor=saldoAFavor;
    this.cuenta.actualizar(this.InfoPago);
    this.reciboPagado.actualizar(this.InfoPago);  
    this.pago.crear(this.usuario.getId(),pago);
    var mensaje="Su pago ha sido registrado exitosamente"
    this.navCtrl.push(ImprimirMensajePage,{mensaje:mensaje});
 
}
//___________



}
