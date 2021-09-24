import React from 'react';
import Estudiante from '../Pages/Estudiante';

const estudiantes = [
    {
        "id": 1,    
        "nombre": "Bart",
        "edad": 10,
        "genero": "M",
        "url": "https://tvazteca.brightspotcdn.com/dims4/default/ed61af2/2147483647/strip/true/crop/1920x1080+0+0/resize/968x545!/format/jpg/quality/80/?url=https%3A%2F%2Ftvazteca.brightspotcdn.com%2F1a%2F0d%2F6284b42a48b7809c1a226f51726a%2Fsimpson-7.png",
        "grado": 8
    },
    {
        "id": 2,    
        "nombre": "Homero",
        "edad": 36,
        "genero": "M",
        "url": "http://s03.s3c.es/imag/_v0/770x420/8/b/b/Homer.jpg",
        "grado": 8

    },
    {
        "id": 3,    
        "nombre": "Lisa",
        "edad": 8,
        "genero": "F",
        "url": "http://s03.s3c.es/imag/_v0/770x420/0/b/c/Lisa.jpg",
        "grado": 8
    },
    {
        "id": 4,    
        "nombre": "Marge",
        "edad": 34,
        "genero": "F",
        "url": "http://s03.s3c.es/imag/_v0/770x420/3/0/d/Marge.jpg",
        "grado": 8

    },
    {
        "id": 5,    
        "nombre": "Maggie",
        "edad": 1,
        "genero": "F",
        "url": "https://www.elimparcial.es/galerias-noticias/galerias/39910/medium/maggieportadilla.jpg",
        "grado": 8
    },
    {
        "id": 6,    
        "nombre": "Moe",
        "edad": 62,
        "genero": "M",
        "url": "https://peru21.pe/resizer/DUYd1yGtotQ9WClFapVcbnVEtxo=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/UV7RVSS5BZF3XBQUPFKSQV4ZR4.jpg",
        "grado": 8
    },
        {
        "id": 7,    
        "nombre": "Apu",
        "edad": 37,
        "genero": "M",
        "url": "https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/YZUY7AWCLJHR5MKNXTBBWMBXC4.jpg",
        "grado": 8
    }

]



const Contenedor = () => (

    <>
    <h1>Los simpsons</h1>
    <img className="simpsonT" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/los-simpson-1564565325.jpg" alt="Serie"></img>
    {
        estudiantes.map ( c => <Estudiante nombre = { c.nombre } edad = { c.edad } genero = { c.genero } url = {c.url} id = {c.id} grado = {c.grado} /> )
   
   
   
   }



    </>

)

export default Contenedor;