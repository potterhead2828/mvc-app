import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";
import * as firebase from 'firebase';
import { MensajeRegistroPage } from "../mensaje-registro/mensaje-registro";
import { LoginPage } from "../login/login";
import { BienvenidoPage } from "../bienvenido/bienvenido";
/**
 * Generated class for the RegitrarPagoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-activar-cuenta',
  templateUrl: 'activar-cuenta.html',
  providers: [HttpProvider]
})
export class ActivarCuentaPage {

   public usuario:any;
   public clave:any;
   public email:any;
   public password:any;
  constructor(public navCtrl: NavController, public params: NavParams,private miProvider:HttpProvider) {
        
        this.BuscarCuenta();
      
        
 }

volver(){

 this.navCtrl.setRoot(LoginPage);

}

submit(){

  //activar cuenta usuario
  var passw:any;

   var user;
   
   this.miProvider.loginUser(String(this.usuario.email), String(this.usuario.password)).then(authData => {
  		 user = firebase.auth().currentUser;
  		 user.updateEmail(String(this.email)).then(function() {
        // Update successful.
     }, function(error) {
          console.log("Error actualizando email");
      });
      
  		user.updatePassword(String(this.password)).then(function() {
       // Update successful.
         }, function(error) {
        console.log("Error actualizando password");
               });
  	}, error => {
  console.log("error logging in!!!");
  	})
     this.usuario.email=this.email;
     this.usuario.password=this.password;         
     this.miProvider.activarCuenta(this.usuario);
     this.navCtrl.push(BienvenidoPage,{usuario:this.usuario});
}

BuscarCuenta(){
 
 var that=this;

  this.miProvider.database_usuarios.once('value', function(snapshot) { 
  var clave=that.clave;
  var i=0;
  


  snapshot.forEach(function(childSnapshot) {//Iteracion sobre la lista snapshot es la raiz, y childSnapshot es cada hijo, cada elemento de la tabla q uno quiere.
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
    
    
    if(childData.claveActivacion==clave){

    that.usuario={
         id:childKey,
         apto:childData.apto,
         nombre:childData.nombre,
         apellido:childData.apellido,
         ctaActiva:"true",
         administrador:"false",
         email:childData.email,
         password:childData.password,
         claveActivacion:clave
    }  
    console.log("Usuarios--->"+JSON.stringify(that.usuario));
      
        }
        else{
          console.log("not our guy!!!\n");
        }
    i++;
  });
   
});

  
 
}


  }

  



