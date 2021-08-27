import React from 'react';

const Estudiante = ({nombre, edad, genero}) => (

    <div className="card">
        <div className="card-body">

        {/* Ternario para validar un prop */}
        <h5 className="card-title">
            { nombre ? nombre : "No hay nombre" }
        </h5>
        <p className="card-text">Edad: {edad}</p>
        <p className="card-text">Genero: {edad}</p>

        </div>
    </div>
)

export default Estudiante;