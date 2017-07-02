import * as firebase from 'firebase';



export class Recibo{


private bd_Recibos=firebase.database().ref('Recibo');
private monto;
private fecha;
private id;   

constructor(){}

crear()
{
      
    
      var ref=firebase.database().ref('Recibo/'+this.id);         
      ref.set ({
		       Fecha:this.fecha,
           Monto:this.monto,
       }); 

}

getID()
{
  return this.id;
}

setID(id)
{
  this.id=id;
}

getReciboRef()
{
   return this.bd_Recibos.once('value');   
}
setMonto(m)
{
  this.monto=m;
}

setFecha(f)
{
  this.fecha=f;
}

Buscar(reciboID)
{
  var reciboRef = this.bd_Recibos.child(reciboID);  
  return reciboRef.once('value');   
}

getMonto()
{
  return this.monto;
}

getFecha()
{
  return this.fecha;
}

}

