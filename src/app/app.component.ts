import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CarteleraPage } from '../pages/cartelera/cartelera';
import { BuzonPage } from '../pages/buzon/buzon';
import { EnviarMensajePage } from '../pages/enviar-mensaje/enviar-mensaje';
import { PagosPage } from '../pages/pagos/pagos';
import { LoginPage } from "../pages/login/login";
import { HomeAdminPage } from "../pages/ModoAdministradorTabs/home-admin/home-admin";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    
    this.initializeApp();
    
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBg8nijNHgCfE6FNJaD57Hk8PJRle8jRWM",
    authDomain: "comunidapp-b4c01.firebaseapp.com",
    databaseURL: "https://comunidapp-b4c01.firebaseio.com",
    projectId: "comunidapp-b4c01",
    storageBucket: "comunidapp-b4c01.appspot.com",
    messagingSenderId: "103616360136"
  };
    firebase.initializeApp(config);
    

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Pagos', component: PagosPage },
      { title: 'Buzon', component: BuzonPage },
      { title: 'Cartelera', component: CarteleraPage },
      { title: 'Enviar Mensaje a la junta', component: EnviarMensajePage },
      { title: 'Cerrar Sesion', component: LoginPage }
     
    ];

    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
   
}
