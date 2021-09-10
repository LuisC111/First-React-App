import React from 'react';
import PropTypes from 'prop-types'
import '../../assets/css/contenedor.css';
import { Link } from 'react-router-dom'



const Estudiante = ({nombre, edad, genero, url, grado, id}) => (

    <div className="card">
        <div className="card-body">

        <h5 className="card-title">
            { nombre }
        </h5>
        <p className="card-text">Edad: {edad}</p>
        <p className="card-text">Genero: {genero}</p>
        <p className="card-text">Grado: {grado}</p>
        <p><Link to={ `/estudiantes/${id}` }>Detalle</Link></p>

        <img className="simpson" src={url} alt='Imagen del personaje'></img>


        </div>
    </div>
)

Estudiante.propTypes = {
    nombre: PropTypes.string,
    edad: PropTypes.number,
    genero: PropTypes.string,
    url: PropTypes.string
}

Estudiante.defaultProps = {
    nombre: "No tiene nombre",
    edad: "No tiene edad",
    genero: "No tiene genero",
    url: "No tiene imagen"
}



export default Estudiante;