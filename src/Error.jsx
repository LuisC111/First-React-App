import React from 'react'
import css from './assets/css/error.css';
import logo from './assets/images/404.svg'

const Error = () => (

    <>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Error 404 - Page Not Found!</title>
    <link rel="stylesheet" type="text/css" href={css} />
    <link href="./assets/images/favicon.png" rel="shortcut icon" type="image/x-icon" />
</head>

<body><center>
<br />
        <img class="ops" src={logo} alt="logo" />
        <br /><br />
        <h3>Oops página no encontrada.
            <br /> La página a la cual intentas acceder no existe!</h3>
        <br />
        <a class="buton" href="/">Menú principal</a>
        </center>
</body> 
    </>

)

export default Error;