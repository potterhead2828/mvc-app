import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";
import * as firebase from 'firebase';
import { LoginPage } from "../login/login";
import { BienvenidoPage } from "../bienvenido/bienvenido";
import { Usuario } from "../../app/models/Usuario";
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

    usuario:Usuario;
    clave:any;
    email:any;
    password:any;

    //Constructor se ejecuta cuando la pagina activar-cuenta.html se carga
    constructor(public navCtrl: NavController, public params: NavParams) 
              {
                this.usuario=new Usuario();
                this.BuscarCuenta();
              }

//Dirige al loginpage
volver()
        {
          this.navCtrl.setRoot(LoginPage); 
        }

submit()
       { //activar cuenta usuario
         
         var user;
         this.usuario.login().then(authData => 
                {  
                   user = firebase.auth().currentUser;
  		             user.updateEmail(String(this.usuario.getEmail())).then(function() 
                       {
                         //actualizacion de email exitosa. 
                       }, function(error) 
                                        {
                                         console.log("Error actualizando email");
                                        });
                    user.updatePassword(String(this.usuario.getPassword())).then(function() 
                        {
                        // actualizacion de clave exitosa.
                      }, function(error) 
                                        {
                                         console.log("Error actualizando password");
                                        });
  	                  }, error => {
                                   console.log("error logging in!!!");
   	                              })
     this.usuario.setEmail(this.email);
     this.usuario.setPassword(this.password);         
     this.usuario.activarCuenta();
     this.navCtrl.push(BienvenidoPage,{usuario:this.usuario});
}

BuscarCuenta(){
 
 var that=this;

  this.usuario.getUsuariosRef().then(snapshot => 
      {
        var clave=that.clave;
        var i=0;
        snapshot.forEach(function(childSnapshot) 
              {
                 var childKey = childSnapshot.key;
                 var childData = childSnapshot.val();
                 if(childData.claveActivacion==clave)
                            {
                  
                                that.usuario.setId(childKey),
                                that.usuario.setApto(childData.apto),
                                that.usuario.setNombre(childData.nombre),
                                that.usuario.setApellido(childData.apellido),
                                that.usuario.setCtaActiva(true),
                                that.usuario.setAdministrador(false),
                                that.usuario.setEmail(childData.email),
                                that.usuario.setPassword(childData.password),
                                that.usuario.setClaveActivacion(clave)
      
                            }
                else 
                    {
                      //usuario incorrecto
                    }
                i++;
              });
   
       });

  
 
}


  }

  



