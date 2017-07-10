import * as firebase from 'firebase';



export class Voto{
    
private bd_voto=firebase.database().ref('Voto');

constructor()
{}

getVotoRef()
{
     return this.bd_voto.once('value');   
}

Buscar(id)
{
    var Ref = this.bd_voto.child(id); 
    return Ref.once('value');  
}

modificar(voto,id)
{
   this.bd_voto.child(id).set({
       voto:voto
   });		
}
}