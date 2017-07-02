import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";
import { EnviarMensajePage } from "../enviar-mensaje/enviar-mensaje";
import { EnviarMensajePropPage } from "../enviar-mensaje-prop/enviar-mensaje-prop";
import { Usuario } from "../../app/models/Usuario";
import { BuzonPropietario } from "../../app/models/BuzonPropietario";
import { BuzonJunta } from "../../app/models/BuzonJunta";
import * as firebase from 'firebase';


/**
 * Generated class for the BuzonPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-buzon',
  templateUrl: 'buzon.html',
  providers: [HttpProvider]
})
export class BuzonPage {
     
     mensajes=[];
     usuario:Usuario;
     buzon:BuzonPropietario;
     buzonJunta:BuzonJunta;

     //El constructor se ejecuta cuando la pagina buzon.html se carga
     constructor(public navCtrl: NavController, public navParams: NavParams,private miProvider:HttpProvider) 
          {
           this.usuario=new Usuario(); 
           this.usuario.setId(firebase.auth().currentUser.uid);
           this.buzon=new BuzonPropietario();
           this.buzonJunta=new BuzonJunta();
           this.BuscarMensajes();
          }

//__________________________________________________________________________________________________________________________
BuscarMensajes()
   { 
      /* 
       Si mi cuenta es administrador, se cargan los mensajes del buzon de la junta,
       de lo contrario se cargan los mensajes individuales de cada propietario.
	    */

    var that=this;
    var i=0;
    var remitenteID;
  
    this.usuario.buscar(this.usuario.getId()).then(snapshot => 
        {
         if (snapshot.val().administrador==false)
            {
             //Buscar Mensajes de su Buzon Particular.
             this.buzon.BuscarBuzon(this.usuario.getId()).then(snapshot => 
                {
                 snapshot.forEach(function(childSnapshot) 
                         {
                          var childKey = childSnapshot.key;
                          var childData = childSnapshot.val();
                          that.mensajes[i]={      
                                            asunto:childData.Asunto,
                                            fecha:childData.Fecha,
                                            mensaje:childData.Mensaje,
                                            remitente:childData.Remitente,
                                            id:childKey
                                           };

                          i++;
                          });
   
                });

             }
          else
              {
               this.buzonJunta.getBuzonJuntaRef().then(snapshot =>
                   {
                    snapshot.forEach(function(childSnapshot) 
                            {
                              var childKey = childSnapshot.key;
                              var childData = childSnapshot.val();
                              that.mensajes[i]={
                                                 remitente:childData.Remitente,
                                                 asunto:childData.Asunto,
                                                 mensaje:childData.Mensaje,
                                                 fecha:childData.Fecha,
                                                 remitenteID:childData.RemitenteID
                              };
                              i++;
                            });
   
                    });

              }
 
	});
}
//______________________________________________________________________________________________________________________

responder(RemitenteID)

   { 
     this.usuario.buscar(this.usuario.getId()).then(snapshot => 
         {
	        if (snapshot.val().administrador==false)
             {
               //Buscar Mensajes de su Buzon Particular.
               //enviar mensaje a la junta
               this.navCtrl.setRoot(EnviarMensajePage);
             }
          else
              {
               this.navCtrl.push(EnviarMensajePropPage,{userID:RemitenteID}); 
              }
 
	       });
   }


}
