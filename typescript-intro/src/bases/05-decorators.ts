class NewPokemon{
    constructor(
        public readonly id: number,
        public name: string
    ) { }

    scream() {
        console.log(`NO!!`);
    }
    speak() {
        console.log(`naur`);
    }

}

const MyDecorator = () => {
    return (target: Function) => {
        //console.log(target)
        return NewPokemon;
    }
}

@MyDecorator()
//con este decorador se esta trabajando con la clase a la que apunta
export class Pokemon {
    constructor(
        public readonly id: number,
        public name: string
    ) { }

    scream() {
        console.log(`${this.name.toUpperCase()}`!!);
    }
    speak() {
        console.log(`${this.name}, ${this.name}`);
    }

}
export const charmander = new Pokemon(4, 'Charmander');

charmander.scream();
charmander.speak();