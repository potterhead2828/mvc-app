import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from "../../../providers/http/http";
import { PublicarAnuncioPage } from "../../publicar-anuncio/publicar-anuncio";
import { EditarAnuncioPage } from "../../editar-anuncio/editar-anuncio";
import { HomePage } from "../../home/home";
import { Cartelera } from "../../../app/models/Cartelera";


/**
 * Generated class for the ModificarCarteleraPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modificar-cartelera',
  templateUrl: 'modificar-cartelera.html',
  providers: [HttpProvider]
})
export class ModificarCarteleraPage {
       
       anuncios=[];
       cartelera:Cartelera;

  //constructor se ejecuta cuando la pagina modificar-cartelera.html se carga     
  constructor(public navCtrl: NavController, public navParams: NavParams, private miProvider:HttpProvider) 
          {
           this.cartelera=new Cartelera();
           this.BuscarAnuncios();
          }


//Dirigirse al home del modo propietario. 
irHomePropietario()
{
 this.navCtrl.setRoot(HomePage);
}


BuscarAnuncios()
     {
      var that=this;
      var i=0;
      this.cartelera.get_bd_cartelera().then(snapshot => 
          {
            snapshot.forEach(function(childSnapshot) 
                    {
                     var childKey = childSnapshot.key;
                     var childData = childSnapshot.val();
                     that.anuncios[i]={ 
                                       fecha:childData.Fecha,
                                       texto:childData.Texto,
                                       titulo:childData.Titulo,
                                       id:childKey
                                      };
                     i++;
                    });
  
          });
     }


publicarAnuncio()
{
 this.navCtrl.setRoot(PublicarAnuncioPage);
}

editar(anuncio)
{
  this.navCtrl.push(EditarAnuncioPage,{anuncio:anuncio});
}



}
