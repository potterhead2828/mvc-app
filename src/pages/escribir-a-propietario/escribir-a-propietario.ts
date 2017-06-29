import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";
import { EnviarMensajePropPage } from "../enviar-mensaje-prop/enviar-mensaje-prop";
import { HomePage } from "../home/home";

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
public usuarios=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private miProvider:HttpProvider) {

    this.ListaPropietarios();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EscribirAPropietarioPage');
  }
ListaPropietarios(){
  var that=this;
  var i=0;
  this.miProvider.database_usuarios.once('value', function(snapshot) { //Once te devuelve una lista y te permite iterar sobre esa lista
  snapshot.forEach(function(childSnapshot) {//Iteracion sobre la lista snapshot es la raiz, y childSnapshot es cada hijo, cada elemento de la tabla q uno quiere.
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
    that.usuarios[i]={ //leo la tabla de firebase en un arreglo mensajes de este archivo, para que despues el html lea de ese arreglo.
          nombre:childData.nombre,
          apellido:childData.apellido,
          apto:childData.apto,
          id:childKey
    };
    i++;
  });
   //console.log("Mensajes-->"+mensajes)
});
}

enviarMensajeProp(userID){

this.navCtrl.push(EnviarMensajePropPage,{userID:userID}); //Para pasarle datos al ts de otra pagina e ir a esa pagina.
console.log("escribir prop userID-->"+userID);

}

irHomePropietario(){

  this.navCtrl.setRoot(HomePage);
}

}
