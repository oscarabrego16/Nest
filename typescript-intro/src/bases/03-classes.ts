import axios from 'axios';
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
//la declaracion de una clase en js y ts
export class Pokemon{
    get imageUrl():string {
        //this apunta a la instancia que se creo, apunta a la instancia de la clase
        return `https://pokemon.com/${this.id}.jpg`;
    }
    constructor(
        public readonly id:number,
        public name:string,)
    {}
    public scream(){
        console.log(`${this.name.toUpperCase()}!!!`);
    }
    private speak(){
        console.log(`${this.name},${this.name}`)
    }
    //axios ayuda con las peticiones http
    //await solo puede estar dentro de una funcion asincrona
    async getMoves(): Promise<Move[]>{
        const {data} = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves);
        return data.moves;
    }
}

export const charmander = new Pokemon(4,'charmander');
console.log(charmander.getMoves());
