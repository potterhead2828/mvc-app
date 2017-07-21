# COMUNIDAPP

Esta es una aplicación móvil implementada utilizando Ionic y Firebase,la cual busca reprensentar la interacción entre los habitantes de un edificio con su respectiva junta de condominio. Por lo cual, tiene dos tipos de sesión: Modo Propietario y Modo Administrador. 

## Modo Propietario
El modo propietario es para todo residente fuera de la junta de condominio, el cual podrá registrar pagos, enviar mensajes directo a la junta, leer la cartelera, participar en encuestas publicadas y recibir mensajes de la junta de condominio.

![Home del modo propietario](https://adriana2828blog.files.wordpress.com/2017/07/2-home-modo-propietario.png) 
![Menu del modo propietario](https://adriana2828blog.files.wordpress.com/2017/07/1-menu-modo-propietario.png)
![Buzon de mensajes del Propietario](https://adriana2828blog.files.wordpress.com/2017/07/3-buzon.png)
![Cartelera Informativa](https://adriana2828blog.files.wordpress.com/2017/07/5-cartelera.png)
![Enviar Mensaje](https://adriana2828blog.files.wordpress.com/2017/07/4-enviar-mensaje.png)
![Registrar Pago](https://adriana2828blog.files.wordpress.com/2017/07/6-home-pagos.png)
![Registrar Pago](https://adriana2828blog.files.wordpress.com/2017/07/6-registrar-pago.png)
![Registrar Pago](https://adriana2828blog.files.wordpress.com/2017/07/7-historial-pagos.png)

## Modo Administrador

El Modo Administrador es para residentes pertenecientes a la junta de condominio, allí podrán modificar la cartelera, enviar mensaje directo y privado a cualquier propietario, publicar recibos, publicar encuestas y ver el conteo de votos, así como consultar el buzón de mensajes de la junta.

![Buzon Junta](https://adriana2828blog.files.wordpress.com/2017/07/8-buzon-junta-condominio.png)
![Modificar Cartelera](https://adriana2828blog.files.wordpress.com/2017/07/9-modificar-cartelera.png)
![Enviar Mensaje a Propietario](https://adriana2828blog.files.wordpress.com/2017/07/11-enviar-mensaje-a-propietario.png)
###### La idea es agregar la funcionalidad de poder cargar un pdf, en aras de el documento correspondiente a la factura a pagar.
![Publicar Recibo](https://adriana2828blog.files.wordpress.com/2017/07/10-publicar-recibo.png)
![Publicar Recibo](https://adriana2828blog.files.wordpress.com/2017/07/10-publicar-recibo-1.png)
![Publicar Recibo](https://adriana2828blog.files.wordpress.com/2017/07/10-publicar-recibo-2.png)
![Publicar Encuesta](https://adriana2828blog.files.wordpress.com/2017/07/13-consultar-encuesta.png)
![Publicar Encuesta](https://adriana2828blog.files.wordpress.com/2017/07/12-publicar-encuesta.png)

## Login

Lo correcto es que la aplicacion tenga un solo boton de login, esto esta por corregirse.
![login](https://adriana2828blog.files.wordpress.com/2017/07/0-login-page.png)
![login](https://adriana2828blog.files.wordpress.com/2017/07/olvide-contrasencc83a.png)

## Activación de una cuenta.

El usuario recibe de parte de la junta de condominio de su edificio un código, con el cual podrá activar su cuenta, colocar el email y password que desee y comenzar a utilizar la app.

![activar cuenta](https://adriana2828blog.files.wordpress.com/2017/07/activar-cuenta1.png)
![activar cuenta](https://adriana2828blog.files.wordpress.com/2017/07/activar-cuenta.png)

# ____________________________________________________________________________________________________________________________________
# Requerimientos para probar la app
###### -Node js
###### -Cuenta de google para la creación del proyecto Firebase
###### -Cuenta de Ionic para poder probar la app en ionic view.

# Procedimiento para probar la app.

## 1- Instalar Ionic
###### 1.1 Abrir la terminal de node js y colocar el siguiente comando: npm install -g cordova ionic
######                  En las MAC hay que colocar-------->        sudo npm install -g cordova ionic
## 2- Crear una nueva app en Ionic
###### 2.1 Ubicar la terminal en la carpeta en la que queremos crear la app
###### 2.2 colocar ionic start mvc-app blank
## 3- Integrar Firebase a la app de Ionic que se acaba de crear
###### 3.1 Es necesario crear un proyecto en firebase
###### 3.2 Abrir la consola del proyecto firebase, hacer click donde dice "add firebase to your webapp" y copiar lo que allí se indica
###### 3.3 Luego, hacer lo siguiente:

######                                      3.3.1 npm install -g typescript
######                                      3.3.2 npm install -g typings
######                                      3.3.3 npm install firebase --save
######                                      3.3.4 typings install --save firebase 

###### Luego,

###### En el archivo app.component.ts:
######                                     3.3.5 import * as firebase 'firebase'; (en la parte donde se hacen los import)
######                                     3.3.6 Dentro del constructor y despues del this.inicializeApp(); pegar el config de firebase asi: (LO SIGUIENTE ES UN EJEMPLO, DEPENDE DE CADA PROYECTO DE FIREBASE)

```javascript
                                          // Initialize Firebase
  
                                             var config = {
                                                            apiKey: "AIzaaD57Hk8PJRle8jRWM",
                                                            authDomain: "comunidapp.firebaseapp.com",    
                                                            databaseURL: "https://comunidapP.firebaseio.com",
                                                            projectId: "comunidapp",
                                                            storageBucket: "comunidapp.appspot.com",
                                                            messagingSenderId: "1036"
                                                         };
                                                         firebase.initializeApp(config);

```

## 4- Abrir la carpeta src de este repositorio y en el directorio de la app de Ionic creada previamente, copiar las siguientes carpetas: 
###### - app
###### - pages
###### - themes
###### - providers

## 5- Ubicarse en la base de datos en la página de firebase y cargar el archivo comunidapp-b4c01-export.json ubicado en el folder mvc-app de este repositorio, para poblar la base de datos y poder probar la app.

## 6- Por último, ubicar la terminal en el directorio de la app ionic y tipear: ionic serve -lab


#                                                       ¡Enjoy!
