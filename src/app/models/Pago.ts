import * as firebase from 'firebase';



export class Pago{

private bd_Pagos=firebase.database().ref('Pagos');


constructor(){}

crear(userID,pago)
{
 this.bd_Pagos.child(userID).push(pago);   
}

getPagoRef()
{
 return this.bd_Pagos.once('value');   
}

buscar(id)
  {
       var Ref = this.bd_Pagos.child(id); 
	   return Ref.once('value');  
  }

}