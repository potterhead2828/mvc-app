import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { Consulta } from "../../app/models/Consulta";
import { ImprimirMensajePage } from "../imprimir-mensaje/imprimir-mensaje";
import { Voto } from "../../app/models/Voto";

/**
 * Generated class for the PublicarConsultaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-publicar-consulta',
  templateUrl: 'publicar-consulta.html',
})
export class PublicarConsultaPage {
  
  consulta:Consulta;
  voto:Voto;
  pregunta;
  fecha;
  fech;
  f;
  constructor(public navCtrl: NavController, public navParams: NavParams) 
  
  {
    this.f=new Date();  
             this.fech={
                        dia:this.f.getDate(),
                        mes:this.f.getMonth()+1,
                        ano:this.f.getFullYear()
                       }
             this.fecha=this.fech.dia+"/"+this.fech.mes+"/"+this.fech.ano;
      this.consulta=new Consulta();
      this.voto=new Voto();       
  }

consultar()
{
   var consulta={
     pregunta:this.pregunta,
     activa:true,
     si:0,
     no:0,
     resultado:"",
     fecha:this.fecha
   }
   this.consulta.modificar(consulta);
    var i=0;
    var that=this;
  this.voto.getVotoRef().then(snapshot => 
       { //Indicar que ningun usuario ha votado todavia.
        snapshot.forEach(function(childSnapshot) 
                {
                  var childKey = childSnapshot.key;              
                  that.voto.modificar(false,childKey);
                  i++;
                });
   
       }); 
   var texto="Consulta publicada exitosamente"
   this.navCtrl.push(ImprimirMensajePage,{mensaje:texto});
}

//Dirige hacia el homepage del modo propietario.
irHomePropietario()
{
  this.navCtrl.setRoot(HomePage);
}



}
