import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { LeerAnuncioPage } from "../leer-anuncio/leer-anuncio";
import { Usuario } from "../../app/models/Usuario";
import { Cartelera } from "../../app/models/Cartelera";
import * as firebase from 'firebase';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HttpProvider,Usuario]
})

export class HomePage {
    
   anuncios=[];
   titulo:any;
   usuario:Usuario;
   cartelera:Cartelera;
  
    //El constructor se ejecuta al cargar la pagina home.html
    constructor(public navCtrl: NavController,private miProvider:HttpProvider) 
            {
                 this.cartelera=new Cartelera();
                 this.usuario=new Usuario();
                 this.BuscarAnuncios ();
            }

//Busca los ultimos 5 titulos publicados en la cartelera
BuscarAnuncios()
{
    var that=this;
    //dentro del .then this no esta definido por eso,lo asignamos a la variable that
    var i=0;
    var ref=that.cartelera.get_bd_titulos();
    ref.then(snapshot => 
        { 
           snapshot.forEach(function(childSnapshot) 
               {
                  var childKey = childSnapshot.key;
                  var childData = childSnapshot.val();
                  that.anuncios[i]={
                                    id:childKey,
                                    fecha:childData.Fecha,
                                    texto:childData.Texto,
                                    titulo:childData.Titulo,
                  };
                  i++;

              });
   
        });
}

//Muestra el anuncio cuyo titulo fue seleccionado en el homepage.
//El id del anuncio se envia a la pagina LeerAnuncio, para que esta lo cargue directamente.
verAnuncio(id)
{
   this.navCtrl.push(LeerAnuncioPage,{id:id});
}

}
