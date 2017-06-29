import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";
import * as firebase from 'firebase';
import { MensajeRegistroPage } from "../mensaje-registro/mensaje-registro";
/**
 * Generated class for the RegitrarPagoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-regitrar-pago',
  templateUrl: 'regitrar-pago.html',
  providers: [HttpProvider]
})
export class RegitrarPagoPage {

   
   public monto:number;
   public banco:any;
   public formaPago:any;
   public nroRecibo:any;
   public concepto:any;
   public UserID:any;
   public fecha:any;
   public fech:any;
   public f:any;
   public InfoPago:any;

  constructor(public navCtrl: NavController, public params: NavParams,private miProvider:HttpProvider) {

    this.UserID=firebase.auth().currentUser.uid;
    this.f=new Date();
      console.log("f--->"+this.f.getDate());  
      this.fech={
      dia:this.f.getDate(),
      mes:this.f.getMonth()+1,
      ano:this.f.getFullYear()
      }
      this.fecha=this.fech.dia+"/"+this.fech.mes+"/"+this.fech.ano;
      this.InfoPago=params.get("InfoPago");
      console.log("InfoPago--RegistrarPagoPage \n"+JSON.stringify(this.InfoPago)+"\n");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegitrarPagoPage');
  }

registrarPago(){

//AL SUMAR SE CONCATENAN LAS COSAS COMO STRINGS.
// SOLO RESTANDO SE INTERPRETA LAS VARIABLES COMO NUMEROS Y NO COMO STRINGS
// ASI QUE SI QUIERO SUMAR 2+2, DEBO COLOCAR-->2-(-2)

var deudaTotal:number;
var saldoAFavor:number;
var deudaRecibo:number;

deudaTotal=this.InfoPago.SaldoDeudor;
saldoAFavor=this.InfoPago.SaldoAFavor-(-this.monto);


 
if (saldoAFavor<deudaTotal){
    
var pago={
  Monto:saldoAFavor,
  Banco:this.banco,
  Tipo:this.formaPago,
  Concepto:"Pago parcial",
  Referencia:this.nroRecibo,
  PropietarioID:this.UserID,
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
if (saldoAFavor==deudaTotal){

var pago={
  Monto:saldoAFavor,
  Banco:this.banco,
  Tipo:this.formaPago,
  Concepto:"Pago total",
  Referencia:this.nroRecibo,
  PropietarioID:this.UserID,
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
if (saldoAFavor>deudaTotal){

var pago={
  Monto:this.monto,
  Banco:this.banco,
  Tipo:this.formaPago,
  Concepto:"Saldo a favor",
  Referencia:this.nroRecibo,
  PropietarioID:this.UserID,
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
       this.miProvider.actualizarHistorial(this.InfoPago);  

console.log("Pago:_"+"\n"+"monto:_"+pago.Monto+"\n"+"banco:_"+pago.Banco+"\n"+"formaPago:_"+pago.Tipo+"\n"+"concepto:_"+pago.Concepto+"\n"+"nroRecibo:_"+pago.Referencia+"\n"+"propietarioID:_"+pago.PropietarioID+"\n"+"Fecha:_"+pago.Fecha);

this.miProvider.registrarPago(this.UserID,pago);
this.navCtrl.setRoot(MensajeRegistroPage);

}

}
