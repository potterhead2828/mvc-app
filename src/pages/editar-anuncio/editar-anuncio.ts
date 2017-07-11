import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";
import { ModificarCarteleraPage } from "../ModoAdministradorTabs/modificar-cartelera/modificar-cartelera";
import { HomePage } from "../home/home";
import { Cartelera } from "../../app/models/Cartelera";

/**
 * Generated class for the EditarAnuncioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-editar-anuncio',
  templateUrl: 'editar-anuncio.html',
  providers: [HttpProvider]
})
export class EditarAnuncioPage {
  
   anuncio:any;
   fecha:any;
   fech:any;
   f:any;
   cartelera:Cartelera;
   //El constructor se ejecuta al cargar la pagina editar-anuncio.html
   constructor(public navCtrl: NavController, public params: NavParams) 
      {  
        this.anuncio=params.get("anuncio");//la pagina modificar cartelera le envia la informacion
                                           //del anuncio a modificar.
        this.f=new Date();
        this.fech={
                   dia:this.f.getDate(),
                   mes:this.f.getMonth()+1,
                   ano:this.f.getFullYear()
                  }
        this.fecha=this.fech.dia+"/"+this.fech.mes+"/"+this.fech.ano;
        this.cartelera=new Cartelera();
      }
 
//Modificar un anuncio previamente publicado en cartelera.
publicarCambios()
{
  this.anuncio.fecha=this.fecha;
  this.cartelera.modificar(this.anuncio);           
  this.navCtrl.setRoot(ModificarCarteleraPage);
}

//Dirige al homepage del modo propietario.
irHomePropietario()
{
  this.navCtrl.setRoot(HomePage);
}


}
