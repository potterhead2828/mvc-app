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
import { EnviarMensajePropPage} from "../pages/enviar-mensaje-prop/enviar-mensaje-prop";
import { PublicarAnuncioPage } from "../pages/publicar-anuncio/publicar-anuncio";
import { EditarAnuncioPage } from "../pages/editar-anuncio/editar-anuncio";
import { LeerAnuncioPage } from "../pages/leer-anuncio/leer-anuncio";
import { HistorialPagosPage } from "../pages/historial-pagos/historial-pagos";
import { ListaRecibosPage } from "../pages/lista-recibos/lista-recibos";
import { ActivarCuentaPage } from "../pages/activar-cuenta/activar-cuenta";
import { BienvenidoPage } from "../pages/bienvenido/bienvenido";
import { PublicarReciboPage } from "../pages/publicar-recibo/publicar-recibo";
import { RegitrarPagoPage } from "../pages/regitrar-pago/regitrar-pago";
import { ImprimirMensajePage } from "../pages/imprimir-mensaje/imprimir-mensaje";
import { PublicarConsultaPage } from "../pages/publicar-consulta/publicar-consulta";


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
    EnviarMensajePropPage,
    PublicarAnuncioPage,
    EditarAnuncioPage,
    RegitrarPagoPage,
    LeerAnuncioPage,
    HistorialPagosPage,
    ListaRecibosPage,
    ActivarCuentaPage,
    BienvenidoPage,
    PublicarReciboPage,
    ImprimirMensajePage,
    PublicarConsultaPage


 
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
    EnviarMensajePropPage,
    PublicarAnuncioPage,
    EditarAnuncioPage,
    LeerAnuncioPage,
    RegitrarPagoPage,
    HistorialPagosPage,
    ListaRecibosPage,
    ActivarCuentaPage,
    BienvenidoPage,
    PublicarReciboPage,
    ImprimirMensajePage,
    PublicarConsultaPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
