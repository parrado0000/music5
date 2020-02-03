
import {Injectable}from'@angular/core';

@Injectable()
export class HeroesService{
    private heroes:Heroe[]=[
        {
          nombre: "Bateria Acustica",
          bio: "El término «batería» también se refiere al músico que toca estos instrumentos, al igual que el término «baterista», ambos equivalentes.​Este instrumento nació de la necesidad de producir diferentes percusiones en un solo sistema agrupado y cómodo para tocar simultáneamente por una sola persona..",
          img: "assets/img/img1.jpg",
          aparicion: "1941-11-01",
          casa:"DC"
        },
        {
          nombre: "Guitarra Acustica",
          bio: "La guitarra acústica es un instrumento musical armónico de cuerda bien templada que cuenta con una caja de resonancia para la amplificación del sonido producido por la vibración de las cuerdas, un mástil, un diapasón o trastero, un clavijero y un puente donde se colocan las cuerdas.Hay una gran variedad de este tipo de guitarras como la country que se muestra en la imagen de la derecha, la guitarra española, el tiple colombiano, cuatro venezolano, guitarra acústica de doce cuerdas o la clásica que es la más común, etc, la guitarra con resonador cuyo sonido es producido por uno o más conos metálicos, entre otras..",
          img: "assets/img/img3.jpg",
          aparicion: "1939-05-01",
          casa:"DC"
        },
        {
          nombre: "Teclado",
          bio: "Un instrumento de teclado es un tipo de instrumento musical que usa un teclado para interpretarlo. El teclado es la parte o sección frontal Está compuesto por un conjunto de teclas adyacentes, negras y blancas. El intervalo entre teclas adyacentes es de un semitono, y entre dos teclas corresponde a un tono. Un intérprete de instrumentos de teclado es un teclista o tecladista en algunos países,",
          img: "assets/img/img2.jpg",
          aparicion: "1964-01-01",
          casa: "Marvel"
        },
        {
          nombre: "Bajo Electrivco",
          bio: "El bajo eléctrico, llamado sencillamente bajo,​ es un instrumento musical melódico de la familia de los cordófonos, similar en apariencia y construcción a la guitarra eléctrica, pero con un cuerpo de mayores dimensiones, un mástil de mayor longitud y escala y, normalmente, cuatro cuerdas afinadas según la afinación estándar del contrabajo, su antecesor.",
          img: "assets/img/img5.jpg",
          aparicion: "1962-05-01",
          casa:"Marvel"
        },
        {
          nombre: "Guitarra Electrica",
          bio: "La guitarra eléctrica surge como una necesidad de las bandas de jazz de Estados Unidos durante la década de 1920. El poco sonido que emitían las guitarras acústicas hacía que el instrumento no tuviese ninguna relevancia, más allá del acompañamiento.",
          img: "assets/img/img4.jpg",
          aparicion: "1940-06-01",
          casa: "DC"
        },
        {
          nombre: "Bongo",
          bio: "El bongó es un instrumento membranófono conformado por un juego de dos tambores pequeños hechos de madera ligeramente troncocónicos, uno más pequeño que el otro, unidos por una pieza de madera. Sus bocas superiores —las de diámetro mayor— están cubiertas por cuero solído que se tensa con un anillo de metal de color negro a través de las llaves metálicas del bongó. El músico que toca el bongó se llama —bongosero—. Se percute con las manos, para lo cual se debe colocar entre las rodillas, sentado, ubicando el parche más agudo (el de menor tamaño) a su izquierda en un ángulo de 45° para obtener su sonido",
          img: "assets/img/img9.jpg",
          aparicion: "1962-08-01",
          casa: "Marvel"
        },
        {
          nombre: "Trompeta",
          bio: "La trompeta es un instrumento musical de viento, que pertenece a la familia de los instrumentos de viento metal o metales, fabricado en aleación de metal. El sonido se produce gracias a la vibración de los labios del intérprete en la parte denominada boquilla a partir de la columna del aire",
          img: "assets/img/img6.jpg",
          aparicion: "1974-11-01",
          casa: "Marvel"
        }
      ];
    
    
    constructor(){
        console.log("Servicio listo para usarse!!!!");
    }

    getHeroes():Heroe[]{
        return this.heroes;
    }
    getHeroe(idx:string){
      return this.heroes[idx];
    }


    buscarHeroes(termino:string){
      let heroesArr:Heroe[]=[];
      termino=termino.toLowerCase();

      for(let heroe of this.heroes){
        let nombre = heroe.nombre.toLowerCase();
        if(nombre.indexOf(termino)>=0 ){
          heroesArr.push(heroe)
        }
      }
      return heroesArr;
    }
}

export interface Heroe{
    nombre:string;
    bio:string;
    img:string;
    aparicion:string;
    casa:string;
};