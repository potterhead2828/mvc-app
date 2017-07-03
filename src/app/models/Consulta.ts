import * as firebase from 'firebase';

export class Consulta

{
  private bd_consulta=firebase.database().ref('Consulta');
  private pregunta;
  private si;
  private no;
  private activa;
  private resultado;
  private fecha;
  
  constructor()
  {

  }

//Crea un anuncio en la cartelera.


getPregunta()
{
  return this.pregunta;
}

setPregunta(p)
{
   this.pregunta=p; 
}

getSi()
{
   return this.si; 
}

setSi(s)
{
   this.si=s; 
}    
getNo()
{
   return this.no; 
}

setNo(s)
{
   this.no=s; 
}    

getFecha()
{
  return this.fecha;  
}

setFecha(f)
{
 this.fecha=f;
}

getActiva()
{
  return this.activa;  
}

setActiva(a)
{
  this.activa=a;  
}

getResultado()
{
 return this.resultado;
}

setResultado(r)
{
 this.resultado=r;
}
modificar(consulta)
{
    this.bd_consulta.set
        ({
           pregunta:consulta.pregunta,
           si:consulta.si,
           no:consulta.no,
           fecha:consulta.fecha,
           resultado:consulta.resultado,
           activa:consulta.activa
        });
}

//Para utilizar el retorno de esta funcion, hay que utilizar .then para obtener el snapshot de la data.
//Buscar un anuncio previamente publicado en cartelera.

//devuele bd_titulos
buscar()
{
  return this.bd_consulta.once('value');
}



}