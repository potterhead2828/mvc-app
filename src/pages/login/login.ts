import { Component } from '@angular/core';
import { NavController, ModalController, MenuController,LoadingController, AlertController, ToastController} from 'ionic-angular';
import { HomePage } from "../home/home";
import { HttpProvider } from "../../providers/http/http";
import { HomeAdminPage } from "../ModoAdministradorTabs/home-admin/home-admin";
import { ActivarCuentaPage } from "../activar-cuenta/activar-cuenta";
import { Usuario } from "../../app/models/Usuario";
import * as firebase from 'firebase';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [HttpProvider]
})
export class LoginPage {

  usuario:Usuario;
  email;
	password;

  constructor(private menu:MenuController, private alertCtrl: AlertController , private loadingCtrl: LoadingController, private navCtrl: NavController, private modalCtrl: ModalController, private toastCtrl: ToastController) {
		
  		  this.usuario=new Usuario();
        this.menu.swipeEnable(false); //Esto evita que se pueda usar la funcion slide del sidemenu para evitar el login
  }
  

//Dirige a la pagina de activacion de una cuenta 
goToActivacion(){

	this.navCtrl.setRoot(ActivarCuentaPage);

}



//Login del usuario Administrador
 submitLoginAdmin(){
	
	var that=this;
  this.usuario.setEmail(this.email);
	this.usuario.setPassword(this.password);

  	 this.usuario.login().then(authData => 
		   {
          var user=firebase.auth().currentUser;
		      this.usuario.buscar(user.uid).then(snapshot => {                                         
		      that.usuario.setAdministrador(snapshot.val().administrador); 
     
		      if (that.usuario.getAdministrador()==true)
					  {                                 
  		       this.navCtrl.setRoot(HomeAdminPage);
		        }
		      else
					{
	         let alert = this.alertCtrl.create
					 ({
	         title: 'Error',
	         subTitle: "Disculpe, usted no pertence a la junta de condominio",
	         buttons: ['OK'],
	         });
	         alert.present();
			     this.navCtrl.setRoot(LoginPage);
		      }
  	}, error => 
		    {       
  		    let alert = this.alertCtrl.create
					({
	        title: 'Error loggin in',
	        subTitle: "error.message",
	        buttons: ['OK']
	        });
	        alert.present();
			    this.navCtrl.setRoot(LoginPage);
  	    });
  	    let loader = this.loadingCtrl.create
				({
  		  dismissOnPageChange: true,
  	    });
  	    loader.present();
	})	 
 }

//Login de propietarios, no miembros de la junta de condominio
  submitLogin(){
     
		  this.usuario.setEmail(this.email);
	    this.usuario.setPassword(this.password);

  	  this.usuario.login().then(authData => 
			{
  		this.navCtrl.setRoot(HomePage);
		  }, 
		  error => 
			{
  	    let alert = this.alertCtrl.create
				({
	      title: 'Error loggin in',
	      subTitle: error.message,
	      buttons: ['OK']
	      });
	    alert.present();
			this.navCtrl.setRoot(LoginPage);
  	});
  	let loader = this.loadingCtrl.create
		({
  		dismissOnPageChange: true,
  	});
  	loader.present();
    }
 
  
//Para manejar perdida de contraseña.
showForgotPassword(){
	
	 let prompt = this.alertCtrl.create
	  ({
      title: 'Introduce tu Email',
      message: "Una nueva contraseña sera enviada a tu email",
      inputs: [
        {
          name: 'recoverEmail',
          placeholder: 'you@example.com'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit',
          handler: data => 
					{
            let loading = this.loadingCtrl.create
					({
				    dismissOnPageChange: true,
				    content: 'Reseting your password..'
			    });
			    loading.present();
             
          this.usuario.forgotPasswordUser(data.recoverEmail).then(() => 
					{
            	   
            	     loading.dismiss().then(() => 
									 {
            	     	//show pop up
            	     		let alert = this.alertCtrl.create
											 ({
					               title: 'Check your email',
					               subTitle: 'Password reset successful',
					               buttons: ['OK']
					             });
					             alert.present();
            	      })
            	
          }, error => 
					  {
            		//show pop up
            		loading.dismiss().then(() => 
								{
				  		  let alert = this.alertCtrl.create
								({
					      title: 'Error resetting password',
					      subTitle: error.message,
					      buttons: ['OK']
					    });
					    alert.present();
					 })
              this.navCtrl.setRoot(LoginPage);
	         });
          }
        }
      ]
    });
    prompt.present();
  }
	


}
