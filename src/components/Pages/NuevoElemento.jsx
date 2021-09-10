import React from 'react';

/*
let estudiante = {
    nombre: "Maria",
    edad: 23
}
*/

var color = "azul"

const NuevoElemento = (props) => (
    <div className="contenedor">
        <h3>Estudiante:</h3>
        <h4>{ props.nombre }</h4>
        <p>Edad: { props.edad }</p>
        <span> Color: { color } </span>
        </div>
)

export default NuevoElemento;