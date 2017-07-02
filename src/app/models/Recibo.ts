import * as firebase from 'firebase';



export class Recibo{


private bd_Recibos=firebase.database().ref('Recibo');   

constructor(){}

getReciboRef()
{
   return this.bd_Recibos.once('value');   
}

Buscar(reciboID)
{
  var reciboRef = this.bd_Recibos.child(reciboID);  
  return reciboRef.once('value');   
}

}

