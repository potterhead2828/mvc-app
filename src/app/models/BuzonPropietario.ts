import * as firebase from 'firebase';



export class BuzonPropietario{
    
private bd_BuzonPropietario=firebase.database().ref('BuzonPropietario');

constructor()
{}

getBuzonPropRef()
{
     return this.bd_BuzonPropietario.once('value');   
}

CrearBuzon(id)
    {
      var buzon={
                 PropietarioID:id,
		         Mensajes:[]            
	            }
      this.bd_BuzonPropietario.push(buzon);     
	}

BuscarBuzon(id)
{
    var Ref = this.bd_BuzonPropietario.child(id); 
    return Ref.once('value');  
}


}