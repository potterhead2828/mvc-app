import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController, AlertController, ToastController} from 'ionic-angular';
import * as firebase from 'firebase';
import { HomePage } from "../home/home";
import { HttpProvider } from "../../providers/http/http";
import { HomeAdminPage } from "../home-admin/home-admin";
import { ActivarCuentaPage } from "../activar-cuenta/activar-cuenta";
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
public emailField: any; 
public passwordField: any; 
private users = [];
private usersList : any;
public administrador:any;

  constructor(private alertCtrl: AlertController , private loadingCtrl: LoadingController, private navCtrl: NavController, private modalCtrl: ModalController, private miProvider: HttpProvider, private toastCtrl: ToastController) {
				
				this.emailField = "";
				this.passwordField = "";
  			
  
  }
  
  
  
  
  signUserUp(){
  	
  	this.miProvider.signUpUser(this.emailField, this.passwordField).then(authData => {
  		//successful
  		this.navCtrl.setRoot(HomePage);
  	}, error => {
  		this.navCtrl.setRoot(LoginPage);
  	});
  	
  	
  	let loader = this.loadingCtrl.create({
  		dismissOnPageChange: true,
  	});
  	
  	loader.present();
  	
  }

goToActivacion(){

	this.navCtrl.setRoot(ActivarCuentaPage);
}


//login

 submitLoginAdmin(){
	alert(this.passwordField);
	var that=this;
  	this.miProvider.loginUser(this.emailField, this.passwordField).then(authData => {
     var user=firebase.auth().currentUser;
		 this.miProvider.findUser(user.uid).then(snapshot => { //dentro del .then this no esta definido por eso,
                                                        //lo metemos en la variable that
		that.administrador = snapshot.val().administrador; 
	    
     
     if (that.administrador==true){
  		//successful
  		this.navCtrl.setRoot(HomeAdminPage);
		 }
		 else{
			 	//alert("error logging in: "+ error.message);
  		let alert = this.alertCtrl.create({
	      title: 'Error',
	      subTitle: "Disculpe, usted no pertence a la junta de condominio",
	      buttons: ['OK'],
	    });
	    alert.present();
			this.navCtrl.setRoot(LoginPage);
		 }
  	}, error => {
  		//alert("error logging in: "+ error.message);
  		let alert = this.alertCtrl.create({
	      title: 'Error loggin in',
	      subTitle: "error.message",
	      buttons: ['OK']
	    });
	    alert.present();
			this.navCtrl.setRoot(LoginPage);
  	});
  	
  	
  	let loader = this.loadingCtrl.create({
  		dismissOnPageChange: true,
  	});
  	
  	loader.present();
	})
	 
 }
  submitLogin(){
  	
  		alert(this.passwordField);
  	this.miProvider.loginUser(this.emailField, this.passwordField).then(authData => {
  		//successful
  		this.navCtrl.setRoot(HomePage);
  		
  	}, error => {
  		//alert("error logging in: "+ error.message);
  		let alert = this.alertCtrl.create({
	      title: 'Error loggin in',
	      subTitle: error.message,
	      buttons: ['OK']
	    });
	    alert.present();
			this.navCtrl.setRoot(LoginPage);
  	});
  	
  	
  	let loader = this.loadingCtrl.create({
  		dismissOnPageChange: true,
  	});
  	
  	loader.present();
  	
  	
  	
    }
 
  

showForgotPassword(){
	
	//
	
	 let prompt = this.alertCtrl.create({
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
          handler: data => {
           
            
            //add preloader
            let loading = this.loadingCtrl.create({
				dismissOnPageChange: true,
				content: 'Reseting your password..'
			});
			 loading.present();
             //call usersservice
            this.miProvider.forgotPasswordUser(data.recoverEmail).then(() => {
            	   //add toast
            	     loading.dismiss().then(() => {
            	     	//show pop up
            	     		let alert = this.alertCtrl.create({
					      title: 'Check your email',
					      subTitle: 'Password reset successful',
					      buttons: ['OK']
					    });
					    alert.present();
            	     })
            	
            	}, error => {
            		//show pop up
            		loading.dismiss().then(() => {
				  		let alert = this.alertCtrl.create({
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
	
	
	googleSignIn(){
		
		this.miProvider.googleSignInUser().then(()=>{
			//success, redirect
			let toast = this.toastCtrl.create({
		      message: 'User account created successfully...',
		      duration: 3000
		    });
		    toast.present();
		
		});	
		  
	}


}
