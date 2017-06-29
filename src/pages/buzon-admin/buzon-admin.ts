

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";
import * as firebase from 'firebase';
import { EnviarMensajePage } from "../enviar-mensaje/enviar-mensaje";
import { EnviarMensajePropPage } from "../enviar-mensaje-prop/enviar-mensaje-prop";
import { HomePage } from "../home/home";

/**
 * Generated class for the BuzonPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-buzon-admin',
  templateUrl: 'buzon-admin.html',
  providers: [HttpProvider]
})
export class BuzonAdminPage {
  public asunto:any;
  public remitente:any;
  public mensaje:any;
  public mensajes=[];
  public UserID:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private miProvider:HttpProvider) {
      this.UserID=firebase.auth().currentUser.uid;
      this.BuscarMensajes();
   }

//__________________________________________________________________________________________________________________________
BuscarMensajes(){

/*
Si mi cuenta es administrador, se cargan los mensajes del buzon de la junta,
de lo contrario se cargan los mensajes individuales de cada propietario.
	*/

  var that=this;
  var i=0;
  var remitenteID;
 this.miProvider.findUser(this.UserID).then(snapshot => {

	if (snapshot.val().administrador==false){
     //Buscar Mensajes de su Buzon Particular.
 
  this.miProvider.database_buzonprop.child(this.UserID).orderByChild('Fecha').once('value', function(snapshot) { //Once te devuelve una lista y te permite iterar sobre esa lista
     console.log("Buzon ID-->"+snapshot.key); 
  snapshot.forEach(function(childSnapshot) {//Iteracion sobre la lista snapshot es la raiz, y childSnapshot es cada hijo, cada elemento de la tabla q uno quiere.
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
   
    that.mensajes[i]={ //leo la tabla de firebase en un arreglo mensajes de este archivo, para que despues el html lea de ese arreglo.        
          asunto:childData.Asunto,
          fecha:childData.Fecha,
          mensaje:childData.Mensaje,
          remitente:childData.Remitente,
          id:childKey
    };

    i++;
  });
   //console.log("Mensajes-->"+mensajes)
});

  }
  else{

  this.miProvider.database_buzonjunta.orderByChild('Fecha').once('value', function(snapshot) { //Once te devuelve una lista y te permite iterar sobre esa lista
       console.log("Buzon ID-->"+snapshot.key); 
  snapshot.forEach(function(childSnapshot) {//Iteracion sobre la lista snapshot es la raiz, y childSnapshot es cada hijo, cada elemento de la tabla q uno quiere.
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
    that.mensajes[i]={ //leo la tabla de firebase en un arreglo mensajes de este archivo, para que despues el html lea de ese arreglo.
          remitente:childData.Remitente,
          asunto:childData.Asunto,
          mensaje:childData.Mensaje,
          fecha:childData.Fecha,
          remitenteID:childData.RemitenteID
    };
    i++;
  });
   //console.log("Mensajes-->"+mensajes)
});

  }
 
	});
}
//______________________________________________________________________________________________________________________

responder(RemitenteID){ //id de a quien se quiere responder

/*
Si mi cuenta es administrador, se cargan los mensajes del buzon de la junta,
de lo contrario se cargan los mensajes individuales de cada propietario.
	*/
 

 this.miProvider.findUser(this.UserID).then(snapshot => {
	
	if (snapshot.val().administrador==false){
     //Buscar Mensajes de su Buzon Particular.
 
 //enviar mensaje a la junta
 console.log("propietario");
   this.navCtrl.setRoot(EnviarMensajePage);
  }
  else{

 //Necesito el id del propietario que envio el mensaje para responderle a el directamente.
    console.log("administrador");
    
this.navCtrl.push(EnviarMensajePropPage,{userID:RemitenteID}); 


  }
 
	});



}


irHomePropietario(){

  this.navCtrl.setRoot(HomePage);
}

}
