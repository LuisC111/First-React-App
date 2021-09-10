import React from "react";

const estudiantes = [
    {
        "id": 1,    
        "nombre": "Bart",
        "edad": 10,
        "genero": "M",
        "url": "https://tvazteca.brightspotcdn.com/dims4/default/ed61af2/2147483647/strip/true/crop/1920x1080+0+0/resize/968x545!/format/jpg/quality/80/?url=https%3A%2F%2Ftvazteca.brightspotcdn.com%2F1a%2F0d%2F6284b42a48b7809c1a226f51726a%2Fsimpson-7.png",
        "grado": "8"
    },
    {
        "id": 2,    
        "nombre": "Homero",
        "edad": 36,
        "genero": "M",
        "url": "http://s03.s3c.es/imag/_v0/770x420/8/b/b/Homer.jpg",
        "grado": "8"

    },
    {
        "id": 3,    
        "nombre": "Lisa",
        "edad": 8,
        "genero": "F",
        "url": "http://s03.s3c.es/imag/_v0/770x420/0/b/c/Lisa.jpg",
        "grado": "8"
    },
    {
        "id": 4,    
        "nombre": "Marge",
        "edad": 34,
        "genero": "F",
        "url": "http://s03.s3c.es/imag/_v0/770x420/3/0/d/Marge.jpg",
        "grado": "8"

    },
    {
        "id": 5,    
        "nombre": "Maggie",
        "edad": 1,
        "genero": "F",
        "url": "https://www.elimparcial.es/galerias-noticias/galerias/39910/medium/maggieportadilla.jpg",
        "grado": "8"
    },
    {
        "id": 6,    
        "nombre": "Moe",
        "edad": 62,
        "genero": "M",
        "url": "data:image/jpeg;base64,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",
        "grado": "8"
    },
        {
        "id": 7,    
        "nombre": "Apu",
        "edad": 37,
        "genero": "M",
        "url": "https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/YZUY7AWCLJHR5MKNXTBBWMBXC4.jpg",
        "grado": "8"
    }

]

const EstudianteDetalle = ({match}) => {
    const estudiante = estudiantes.filter(c => c.id === parseInt(match.params.id))[0];

    return(
        <>
            {
                estudiante ? (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {estudiante.nombre}
                            </h5>
                            <p className="card-text">Edad: {estudiante.edad}.</p>
                            <p className="card-text">Genero: {estudiante.genero}.</p>
                            <p className="card-text">Grado: {estudiante.grado}.</p>
                            <img className="simpson" src={estudiante.url} alt='Imagen del personaje'></img>

                        </div>
                    </div>
                ):
                <h1>El Id no esta registrado.</h1>
            }
            <a href={`/estudiantes`}>Ver todos</a>
        </>
    );
};

export default EstudianteDetalle;