import React from 'react';
import Estudiante from './Estudiante';

const estudiantes = [
    {
        "nombre": "Luis Carlos",
        "edad": 17,
        "genero": "M"
    },
    {
        "nombre": "Maria Diaz",
        "edad": 19,
        "genero": "F"
    },
    {
        "nombre": "Pedro Jimenez",
        "edad": 27,
        "genero": "M"
    },
    {
        "nombre": "Jose Arroyo",
        "edad": 12,
        "genero": "M"
    },
    {
        "nombre": "Jennifer Diaz",
        "edad": 37,
        "genero": "F"
    },
    {
        "nombre": "Luis Martinez",
        "edad": 58,
        "genero": "M"
    },

]



const Contenedor = () => (

    <>
    {
        estudiantes.map ( c => <Estudiante nombre = { c.nombre } edad = { c.edad } genero = { c.genero }  /> )
    }
    </>

)

export default Contenedor;