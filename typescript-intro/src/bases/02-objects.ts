export const pokemonIds = [1,20,30,34,66];

pokemonIds.push(+'5');

//obligar a que el objeto luzca de cierta forma
//export const pokemon = {
//    id: 1,
//    name: 'Bulbasaur'
//}


interface Pokemon{
    id:number;
    name: string;
    age ?: number;
    lastName : number | undefined;
}

export const bulbasaur: Pokemon={
    id:1,
    name: 'Bulbasaur',
    lastName: 5,
}

export const charmander: Pokemon={
    id:1,
    name: 'Charmander',
    lastName: 5,
}

export const pokemons: Pokemon[] =[];
pokemons.push();