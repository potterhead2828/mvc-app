import * as firebase from 'firebase';



export class ReciboPagado{

private bd_Recibos=firebase.database().ref('RecibosPagados');   


constructor(){}

getRecibosPagadosRef()
{
    return this.bd_Recibos.once('value');  
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