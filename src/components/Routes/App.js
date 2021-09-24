//import logo from './logo.svg';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Contenedor from '../Molecules/Contenedor'
import Contacto from '../Molecules/Contacto'
import Header from '../Organisms/HeaderComponent'
import EstudianteDetalle from '../Pages/EstudianteDetalle'
import Mal from '../Pages/Error';
import Footer from '../Organisms/FooterComponent';
import DatosApi from '../Molecules/DatosApi';
import SimpsonsApi from '../Molecules/SimpsonsApi';
import SimpsonDetalle from '../Pages/SimpsonDetalle';
import Home from '../Pages/Home';

const App = () => (

<Router>
<Header />
<Switch>

<Route path="/" exact component={ Home } />
<Route path="/estudiantes" exact component={ Contenedor } />
<Route path="/estudiantes/:id" exact component={ EstudianteDetalle } />
<Route path="/contacto" exact component={ Contacto } />
<Route path="/datos_api" exact component={ DatosApi } />
<Route path="/simpsons_api" exact component={ SimpsonsApi } />
<Route path="/simpsons_api/:id" exact component={ SimpsonDetalle } />
<Route path="*" component={ Mal } />

</Switch>
<Footer />

</Router>

)




export default App;
