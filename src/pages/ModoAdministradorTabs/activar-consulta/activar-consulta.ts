import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../../home/home";
import { PublicarConsultaPage } from "../../publicar-consulta/publicar-consulta";
import { Consulta } from "../../../app/models/Consulta";
import { Voto } from "../../../app/models/Voto";
import { ImprimirMensajePage } from "../../imprimir-mensaje/imprimir-mensaje";

/**
 * Generated class for the ActivarConsultaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-activar-consulta',
  templateUrl: 'activar-consulta.html',
})
export class ActivarConsultaPage {
    fecha;
    fech;
    f;
    si;
    no;
    consulta:Consulta;
    voto:Voto;
  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {

      this.f=new Date();  
      this.fech={
                 dia:this.f.getDate(),
                 mes:this.f.getMonth()+1,
                 ano:this.f.getFullYear()
                }
     this.fecha=this.fech.dia+"/"+this.fech.mes+"/"+this.fech.ano;    
     var that=this;
     this.consulta=new Consulta();
     this.consulta.buscar().then(snapshot=>{
           that.si=snapshot.val().si,
           that.no=snapshot.val().no
     })
     this.voto=new Voto();
  }

nuevaConsulta()
   {
     this.navCtrl.setRoot(PublicarConsultaPage);
   }

finalizarConsulta()
   {
     
   var consulta={
     pregunta:"Proximamente, te preguntaremos!!",
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
                  that.voto.modificar(true,childKey);
                  i++;
                });
   
       }); 
   var texto="Consulta finalizada exitosamente"
   this.navCtrl.push(ImprimirMensajePage,{mensaje:texto});
   }   
//Se dirige al homepage del modo propietario
irHomePropietario()
   {
     this.navCtrl.setRoot(HomePage);
   }
}
