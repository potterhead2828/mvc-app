import * as firebase from 'firebase';



export class CuentaPropietario 
{
private bd_cuentaPropietario=firebase.database().ref('CuentaPropietario');
private saldoAFavor:any;
private saldoDeudor:any;

constructor(){}

getCtaPropRef()
{
 return this.bd_cuentaPropietario.once('value'); 	
}

buscar(id)
{
	 var cta_Ref = this.bd_cuentaPropietario.child(id); 
	 return cta_Ref.once('value'); 

}

actualizar(InfoPago)
{
 this.bd_cuentaPropietario.child(InfoPago.UserID).set
      ({
		   SaldoAFavor:InfoPago.SaldoAFavor,
           SaldoDeudor:InfoPago.SaldoDeudor,
       });
}

getSaldoAFavor()
{
   return this.saldoAFavor; 
}

setSaldoAFavor(s)
{
   this.saldoAFavor=s;  
}

getSaldoDeudor()
{
  return this.saldoDeudor;  
}

setSaldoDeudor(s)
{
  this.saldoDeudor=s;
}



}