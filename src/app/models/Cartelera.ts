import * as firebase from 'firebase';

export class Cartelera

{
  private bd_Cartelera=firebase.database().ref('Cartelera');
  private bd_titulos=firebase.database().ref('Cartelera').orderByChild('Fecha').limitToLast(3);
  
  constructor()
  {

  }

//Crea un anuncio en la cartelera.
crear(anuncio)
{
  this.bd_Cartelera.push(anuncio)
}

//modifica un anuncio previamente publicado en cartelera
modificar(anuncio)
{
    this.bd_Cartelera.child(anuncio.id).set
        ({
           Titulo:anuncio.titulo,
           Fecha:anuncio.fecha,
           Texto:anuncio.texto
        });
}

//Para utilizar el retorno de esta funcion, hay que utilizar .then para obtener el snapshot de la data.
//Buscar un anuncio previamente publicado en cartelera.
buscar(id)
  {
      var anuncioRef = this.bd_Cartelera.child(id); 
			return anuncioRef.once('value'); 
  }

//devuele bd_titulos
get_bd_titulos()
{
  return this.bd_titulos.once('value');
}

//devuelve bd_cartelera
get_bd_cartelera()
{
  return this.bd_Cartelera.once('value');
}

}