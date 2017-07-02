import * as firebase from 'firebase';



export class ReciboPagado{

private bd_Recibos=firebase.database().ref('RecibosPagados');   
private deuda;
private reciboid;

constructor(){}

crear(id,recibo)
{
      var ref=firebase.database().ref('RecibosPagados/'+id+'/'+recibo.reciboid);         
      ref.set ({
		       deuda:recibo.deuda,
               reciboid:recibo.reciboid
       }); 

}

getRecibosPagadosRef()
{
    return this.bd_Recibos.once('value');  
}

getDeuda()
{
	return this.deuda;
}

setDeuda(d)
{
	this.deuda=d;
}

getReciboID()
{
	return this.reciboid;
}

setReciboID(r)
{
	this.reciboid=r;
}

buscar(id)
{
	 var cta_Ref = this.bd_Recibos.child(id); 
	 return cta_Ref.once('value'); 

}

actualizar(InfoPago){

for(var i=0;i<InfoPago.HistorialPagos.length;i++)
   {
     this.bd_Recibos.child(InfoPago.UserID).child(InfoPago.HistorialPagos[i].reciboID).set
	     ({
			 deuda:InfoPago.HistorialPagos[i].deuda,
             reciboid:InfoPago.HistorialPagos[i].reciboID});
	      }

}


//--


}