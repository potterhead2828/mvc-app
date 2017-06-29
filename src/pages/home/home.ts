import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
 
import * as firebase from 'firebase';
import { LeerAnuncioPage } from "../leer-anuncio/leer-anuncio";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HttpProvider]
})
export class HomePage {
  public items=[];
  private nombre:any;
  private apellido:any;
  public anuncios=[];
  public titulo:any;
  public fecha:any;
  public texto:any;
  constructor(public navCtrl: NavController,private miProvider:HttpProvider) {
  
  //this.items=["#RacionamientoHidrocapital","#AscensoresFuncionado","#NuevoReciboPublicado"];
  this.BuscarAnuncios();

}

BuscarUsuario(theUserId){
	
	var that = this;
	
	this.miProvider.findUser(theUserId).then(snapshot => { //dentro del .then this no esta definido por eso,
                                                        //lo metemos en la variable that
		that.nombre = snapshot.val().nombre; //get user photo
	   that.apellido= snapshot.val().apellido; 
	})
}

BuscarAnuncios(){
  console.log("IM IN!!");
var that=this;
var i=0;
  this.miProvider.database_cartelera_titulos.once('value', function(snapshot) { //Once te devuelve una lista y te permite iterar sobre esa lista
  snapshot.forEach(function(childSnapshot) {//Iteracion sobre la lista snapshot es la raiz, y childSnapshot es cada hijo, cada elemento de la tabla q uno quiere.
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
    that.anuncios[i]={ //leo la tabla de firebase en un arreglo mensajes de este archivo, para que despues el html lea de ese arreglo.
          id:childKey,
          fecha:childData.Fecha,
          texto:childData.Texto,
          titulo:childData.Titulo,
    };
    i++;

  });
   //console.log("Mensajes-->"+mensajes)
});


}

verAnuncio(id){
console.log("anuncio id-->"+id);
this.navCtrl.push(LeerAnuncioPage,{id:id});
}

}
