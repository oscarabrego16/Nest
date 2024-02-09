//esto ya es un modulo porque esta haciendo export


//al hacer el export se encarga de los modulos vite

export let name: string = 'Oscar';
//Si no se ocupa export es local.
export const age: number = 5;

export const isValid: boolean = true;
name = 'Alejandro';

export const templateString = `esto es
string
multilinea
"dobles
'simples
inyteccion valores ${name}
escapar simbolo asi
BOOLEAN ${isValid} `;

//No usar este tipo de codigo que s eejecute, porque al importar
//se ejecutara todo el js
console.log(name);