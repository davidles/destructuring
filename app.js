// Crear un array de personas
// Persona:  id, nombre, apellido,    edad
let personas = [
    {
        id: "1",
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 25
    },
    {
        id: "2",
        nombre: 'Raquel',
        apellido:  'Virreyra',
        edad: 23
    },
    {id:'3', nombre: 'Maria'},
    {id:'4', nombre: 'Carlos'}
]

// Destructuring

let [ ,persona1 ] = personas;

let  { apellido, nombre, edad } = persona1;


// Spread operator : Agregar otra personas

let colores = [ 'Amarillo', 'Rojo', 'Negro']


let nvoArr = [...personas]

let [ nvaPersona1,  nvaPersona2, , carlos ] = personas;


//Rest Operator
function rest(...param){

    let resultado = param.reduce((acc, iterador)=> acc + iterador)

    return resultado

}



console.log(rest(1,4,4,2,1))

