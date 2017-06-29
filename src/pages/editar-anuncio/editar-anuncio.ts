import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../providers/http/http";
import { ModificarCarteleraPage } from "../modificar-cartelera/modificar-cartelera";
import { HomePage } from "../home/home";

/**
 * Generated class for the EditarAnuncioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-editar-anuncio',
  templateUrl: 'editar-anuncio.html',
  providers: [HttpProvider]
})
export class EditarAnuncioPage {
public anuncio:any;
public fecha:any;
  public fech:any;
  public f:any;
  constructor(public navCtrl: NavController, public params: NavParams, private miProvider:HttpProvider) {
            this.anuncio=params.get("anuncio");
            console.log("editar-anuncio-page.ts--->id:_ "+this.anuncio.id+"\n"+"fecha:_"+this.anuncio.fecha+"\n"+"texto:_"+this.anuncio.texto);
            this.f=new Date();
      console.log("f--->"+this.f.getDate());  
      this.fech={
      dia:this.f.getDate(),
      mes:this.f.getMonth()+1,
      ano:this.f.getFullYear()
      
 }
      this.fecha=this.fech.dia+"/"+this.fech.mes+"/"+this.fech.ano;
      console.log("Hoy es---> "+this.fecha);
}
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarAnuncioPage');
  }


publicarCambios(){
this.anuncio.fecha=this.fecha;
console.log("LUEGO DE EDITAR--->id:_ "+this.anuncio.id+"\n"+"fecha:_"+this.anuncio.fecha+"\n"+"texto:_"+this.anuncio.texto);
this.miProvider.modificarAnuncio(this.anuncio);           
 this.navCtrl.setRoot(ModificarCarteleraPage);
}
irHomePropietario(){

  this.navCtrl.setRoot(HomePage);
}


}
