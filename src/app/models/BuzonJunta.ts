import * as firebase from 'firebase';



export class BuzonJunta{

private bd_BuzonJunta=firebase.database().ref('BuzonJunta');

constructor(){}


//devuelve bd_BuzonJunta
getBuzonJuntaRef()
{
 return this.bd_BuzonJunta.once('value');
}

//Enviar un mensaje al buzon de la junta de condominio
enviarMensajeJunta(mensaje)
{
  //mensaje es un json.
   this.bd_BuzonJunta.push(mensaje);
}

//Enviar un mensaje al buzon de un propietario.


}
