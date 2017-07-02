import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PagosPage } from '../pages/pagos/pagos';
import { CarteleraPage } from '../pages/cartelera/cartelera';
import { BuzonPage } from '../pages/buzon/buzon';
import { EnviarMensajePage } from '../pages/enviar-mensaje/enviar-mensaje';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from "../pages/login/login";
import { HomeAdminPage } from "../pages/ModoAdministradorTabs/home-admin/home-admin";
import { MensajeEnviadoPage } from "../pages/mensaje-enviado/mensaje-enviado";
import { EnviarMensajePropPage} from "../pages/enviar-mensaje-prop/enviar-mensaje-prop";
import { MensajeEnviado2Page } from "../pages/mensaje-enviado2/mensaje-enviado2";
import { PublicarAnuncioPage } from "../pages/publicar-anuncio/publicar-anuncio";
import { EditarAnuncioPage } from "../pages/editar-anuncio/editar-anuncio";
import { LeerAnuncioPage } from "../pages/leer-anuncio/leer-anuncio";
import { HistorialPagosPage } from "../pages/historial-pagos/historial-pagos";
import { ListaRecibosPage } from "../pages/lista-recibos/lista-recibos";
import { MensajeRegistroPage } from "../pages/mensaje-registro/mensaje-registro";
import { ActivarCuentaPage } from "../pages/activar-cuenta/activar-cuenta";
import { BienvenidoPage } from "../pages/bienvenido/bienvenido";
import { PublicarReciboPage } from "../pages/publicar-recibo/publicar-recibo";
import { RegitrarPagoPage } from "../pages/regitrar-pago/regitrar-pago";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PagosPage,
    CarteleraPage,
    BuzonPage,
    EnviarMensajePage,
    LoginPage,
    HomeAdminPage,
    MensajeEnviadoPage,
    MensajeEnviado2Page,
    EnviarMensajePropPage,
    PublicarAnuncioPage,
    EditarAnuncioPage,
    RegitrarPagoPage,
    LeerAnuncioPage,
    HistorialPagosPage,
    ListaRecibosPage,
    MensajeRegistroPage,
    ActivarCuentaPage,
    BienvenidoPage,
    PublicarReciboPage


 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PagosPage,
    CarteleraPage,
    BuzonPage,
    EnviarMensajePage,
    LoginPage,
    HomeAdminPage,
    MensajeEnviadoPage,
    MensajeEnviado2Page,
    EnviarMensajePropPage,
    PublicarAnuncioPage,
    EditarAnuncioPage,
    LeerAnuncioPage,
    RegitrarPagoPage,
    HistorialPagosPage,
    ListaRecibosPage,
    MensajeRegistroPage,
    ActivarCuentaPage,
    BienvenidoPage,
    PublicarReciboPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
