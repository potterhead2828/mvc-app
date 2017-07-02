import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../../providers/http/http";
import { EnviarMensajePropPage } from "../../enviar-mensaje-prop/enviar-mensaje-prop";
import { HomePage } from "../../home/home";
import { Usuario } from "../../../app/models/Usuario";

/**
 * Generated class for the EscribirAPropietarioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-escribir-a-propietario',
  templateUrl: 'escribir-a-propietario.html',
  providers: [HttpProvider]
})


export class EscribirAPropietarioPage {
    usuario:Usuario;
    usuarios=[];
 
     //El constructor se ejecuta cuando se carga la pagina escribir-a-propietario.html
     constructor(public navCtrl: NavController, public navParams: NavParams, private miProvider:HttpProvider) 
        {
         this.usuario=new Usuario();
         this.ListaPropietarios();
        }


ListaPropietarios()
 {
    var that=this;
    var i=0;
    this.usuario.getUsuariosRef().then(snapshot => 
       { 
        snapshot.forEach(function(childSnapshot) 
                {
                  var childKey = childSnapshot.key;
                  var childData = childSnapshot.val();
                  that.usuarios[i]={ 
                                    nombre:childData.nombre,
                                    apellido:childData.apellido,
                                    apto:childData.apto,
                                    id:childKey
                                  };
                  i++;
                });
   
       });
}

enviarMensajeProp(userID)
    { 
      this.navCtrl.push(EnviarMensajePropPage,{userID:userID}); 
    }

//Se dirige a la pagina home del modo propietario
irHomePropietario()
   {
    this.navCtrl.setRoot(HomePage);
   }


}
