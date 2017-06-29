import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
/*
  Generated class for the HttpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HttpProvider {
private data: any;
public fireAuth: any; 
public User: any;
public database_usuarios:any; //referencia a la tabla Usuarios de la base de datos en firebase.
public database_buzonjunta:any;
public database_buzonprop:any;
public database_cartelera_titulos:any;
public database_cartelera:any;
public database_pago:any;
public database_recibo:any;
public database_cuentapropietario:any;
public database_recibospagados:any;


     constructor(public http: Http) {

         console.log('HttpProvider Provider Loaded');
		     this.fireAuth=firebase.auth();
         this.database_usuarios = firebase.database().ref('Usuarios');
		     this.database_buzonjunta=firebase.database().ref('BuzonJunta');
         this.database_buzonprop=firebase.database().ref('BuzonPropietario');
         this.database_cartelera=firebase.database().ref('Cartelera');
         this.database_cartelera_titulos=firebase.database().ref('Cartelera').orderByChild('Fecha').limitToLast(5);
         this.database_pago=firebase.database().ref('Pagos');
         this.database_cuentapropietario=firebase.database().ref('CuentaPropietario');
         this.database_recibo=firebase.database().ref('Recibo');
          this.database_recibospagados=firebase.database().ref('RecibosPagados');
        }



//__________________ACTIVAR CUENTA_________________________________________________________________________

activarCuenta(user){

	this.database_usuarios.child(user.id).set({
		nombre:user.nombre,
    apellido:user.apellido,
    ctaActiva:user.ctaActiva,
    apto:user.apto,
    administrador:user.administrador,
    email:user.email,
    password:user.password,
    claveActivacion:user.claveActivacion
     
		});

}

//________________________________________________________________________________________________________

   findUser(userId:any){ //Busca un elemento de la tabla Usuarios con el id=UserId.

      var userRef = this.database_usuarios.child(userId); //referencia al elemento de la tabla q se quiere buscar.
			return userRef.once('value'); //Devuelvo el usuario solicitado.  

   }

   findUserAccount(userId:any){
       var userRef = this.database_cuentapropietario.child(userId); //referencia al elemento de la tabla q se quiere buscar.
			 return userRef.once('value'); //Devuelvo el usuario solicitado.  
   }

    CreateUserMailBox(userId:any){
      var buzon={PropietarioID:userId,
		         Mensajes:[]            
	  }
             this.database_buzonprop.push(buzon);     
	}

    


//Sign up, Sign in, Register, Log out Code.______________________________________________________________________________

signUpUser(email: string , password: string){
	return this.fireAuth.createUserWithEmailAndPassword(email, password).then((newUser) => {
		//sign in the user
		this.fireAuth.signInWithEmailAndPassword(email, password).then((authenticatedUser) => {
			console.log("IM IN!");
			//successful login, create user profile
		this.database_usuarios.child(authenticatedUser.uid).set({
			email: email
		});
			
		});
	});
}


loginUser(email: string, password: string): any {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }
  
  
logoutUser(){
 	return this.fireAuth.signOut();
 	//redirection
 }


forgotPasswordUser(email: any){
 	return this.fireAuth.sendPasswordResetEmail(email);
 }
 
googleSignInUser(){
 	var provider = new firebase.auth.GoogleAuthProvider();
 	provider.addScope('https://www.googleapis.com/auth/plus.login');
 	
 	
 
 	var that = this;
 	
 	return firebase.auth().signInWithPopup(provider).then(function(result) {
 		
  if (result.user) {
  
    // The signed-in user info.
  var user = result.user;
  
  var res = result.user.displayName.split(" ");
    
   
    that.database_usuarios.child(user.uid).set({
			email: user.email,
			photo: user.photoURL,
			username: user.displayName,
			 name:{
			 	first: res[0],
			 	middle: res[1],
			 	last: res[2],
			},
		});
		
			
		
  }
  
}).catch(function(error) {
	console.log(error);
    //alert("error "+error.message);
});
 }
//Sign up, Sign in, Register, Log out Code._______________________________________________________________________________________

//_____ENVIO DE MENSAJES________________________________________________________________________________________________
 enviarMensajeJunta(mensaje){
   //mensaje es un json.
   this.database_buzonjunta.push(mensaje);
   console.log("Esto es el Mensaje \n"+"\n"+mensaje.Asunto+"\n"+mensaje.Remitente+"\n"+mensaje.Mensaje);

 }

enviarMensajeProp(mensaje,userId){
	console.log("userID:_del provider"+userId);
   this.database_buzonprop.child(userId).push(mensaje);	//el database.ref().child(KEY AQUI) hay q pasarle como argumento
                                                         //el ID del elemento de esa tabla q uno ta buscando o que quiere
														  //modificar.		
    //mensaje debe ser un json asi--> mensaje={
		//Asunto:"",
        //Mensaje:""	
///}
   //Aqui el buzon individual de cada propietario tiene como id el id del propietario.
  //Sino tiene buzon al enviarle el primer mensaje se le crea.
  //Y si ya lo tiene simplemente se agrega el mensaje.
 }



//____ENVIO DE MENSAJES__________________________________________________________________________________________________


//----Publicar en la cartelera--------------------------------------------------------------------------------------------

 publicarEnCartelera(anuncio){
   //mensaje es un json.
   this.database_cartelera.push(anuncio);
   console.log("Esto es el Mensaje \n"+"\n"+anuncio.Titulo+"\n"+anuncio.Fecha+"\n"+anuncio.Texto);

 }

modificarAnuncio(anuncio){

console.log("http--->anuncioID:_ "+anuncio.id+"\n"+"titulo:_"+anuncio.titulo+"\n"+"http--->texto:_"+anuncio.texto+"\n"+anuncio.fecha);
this.database_cartelera.child(anuncio.id).set({
         Titulo:anuncio.titulo,
         Fecha:anuncio.fecha,
         Texto:anuncio.texto
     

});

}

   findAnuncio(anuncioId:any){ //Busca un elemento de la tabla Usuarios con el id=UserId.

      var anuncioRef = this.database_cartelera.child(anuncioId); //referencia al elemento de la tabla q se quiere buscar.
			return anuncioRef.once('value'); //Devuelvo el usuario solicitado.  

   }

//----Publicar en la cartelera--------------------------------------------------------------------------------------------

//----Proceso de Pago-----------------------------------------------------------------------------------------------------
registrarPago(userID,pago){

this.database_pago.child(userID).push(pago);   

}

getRecibo(reciboID){

 var reciboRef = this.database_recibo.child(reciboID); //referencia al elemento de la tabla q se quiere buscar.
			return reciboRef.once('value'); //Devuelvo el usuario solicitado.  
}

actualizarHistorial(InfoPago){

   this.database_cuentapropietario.child(InfoPago.UserID).set({
			SaldoAFavor:InfoPago.SaldoAFavor,
      SaldoDeudor:InfoPago.SaldoDeudor,
      
		});
 for(var i=0;i<InfoPago.HistorialPagos.length;i++){
        this.database_recibospagados.child(InfoPago.UserID).child(InfoPago.HistorialPagos[i].reciboID).set(
          {deuda:InfoPago.HistorialPagos[i].deuda,
           reciboid:InfoPago.HistorialPagos[i].reciboID});
    
    console.log("HTTP-->RECIBOID:_"+InfoPago.HistorialPagos[i].reciboID); 

}

}

//----Proceso de Pago-----------------------------------------------------------------------------------------------------
//----Administrar Pagos---------------------------------------------------------------------------------------------------




//----Administrar Pagos---------------------------------------------------------------------------------------------------




//#########################################################################################################################
//Pagina de ejemplo para obtener json data.
getJsonData(){
    return this.http.get('https://www.reddit.com/r/worldnews/.json').map(res => res.json());
  }


}
