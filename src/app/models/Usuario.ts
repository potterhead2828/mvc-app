import * as firebase from 'firebase';



export class Usuario {
    
private bd_usuarios=firebase.database().ref('Usuarios');
private fireAuth=firebase.auth();
private administrador:boolean;
private nombre:string;
private apellido:string;
private apto:string;
private ctaActiva:string;
private email:string;
private password:string;
private claveActivacion:string;
private id:any;


constructor(){}

//Crea el usuario en firebase, y en contentPath Usuario se agrega la informacion del mismo.
crear(email: string , password: string)
{
	return this.fireAuth.createUserWithEmailAndPassword(email, password).then((newUser) => 
    {
	//loggear al usuario
	  this.fireAuth.signInWithEmailAndPassword(email, password).then((authenticatedUser) => 
          {
	        //inicio de sesion exitoso, luego agregar a la tabla usuario.
            this.bd_usuarios.child(authenticatedUser.uid).set
                ({
			            email: email,
                  password:password,
                  administrador:false,
                  ctaActiva:false,
                  claveActivacion:"",
                  nombre:"",
                  apellido:"",
                  apto:"",
                 
		        });	
		  });
	});
}

//devuelve un json con toda la data del usuario


getId()
 {
  return this.id
 }

getNombre()
 {
  return this.nombre
 }

getApellido()
 { 
  return this.apellido 
 } 

getPassword()
 {
  return this.password 
 }

getEmail()
 {
  return this.email 
 }

getCtaActiva()
 {
  return this.ctaActiva 
 }

 getAdministrador()
 {
  return this.administrador 
 }

  getClaveActivacion()
  {
   return this.claveActivacion  
  }
  
getApto()
 { 
  return this.apto;
 }


 setId(id)
 {
  this.id=id;
 }

setApto(a)
 { 
  this.apto=a;
 }

setNombre(n)
 { 
  this.nombre=n;
 }

setApellido(a)
 { 
  this.apellido=a; 
 } 

setPassword(pass)
 {
  this.password=pass; 
 }

setEmail(mail)
 {
  this.email=mail; 
 }

setCtaActiva(booleanValue)
 {
  this.ctaActiva=booleanValue; 
 }

 setAdministrador(admin)
 {
   this.administrador=admin; 
 }

  setClaveActivacion(claveActivacion)
  {
   this.claveActivacion=claveActivacion;  
  }


//devuelve bd_usuario
getUsuariosRef()
 {
   return this.bd_usuarios.once('value');   
 }



//Para utilizar el retorno de esta funcion, hay que utilizar .then para obtener el snapshot de la data.
buscar(id)
  {
       var userRef = this.bd_usuarios.child(id); 
	     return userRef.once('value');  
  }

actualizar(){}

borrar(){}

//Iniciar Sesion
login() 
      {
       return this.fireAuth.signInWithEmailAndPassword(this.email, this.password);
      }

//Cerrar Sesion  
logoutUser()
     {
 	   return this.fireAuth.signOut();
     }  

//El usuario coloca su clave asignada de activacion, y se habilita su cuenta para uso de la aplicacion.
activarCuenta()
{
	this.bd_usuarios.child(this.id).set
    ({	
        nombre:this.nombre,
        apellido:this.apellido,
        ctaActiva:this.ctaActiva,
        apto:this.apto,
        administrador:this.administrador,
        email:this.email,
        password:this.password,
        claveActivacion:this.claveActivacion
     
	});
}

forgotPasswordUser(email: any){
 	return this.fireAuth.sendPasswordResetEmail(email);
 }


}