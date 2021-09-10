//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Contenedor from './Contenedor'
import Contacto from './Contacto'
import Header from './HeaderComponent'
import EstudianteDetalle from './EstudianteDetalle'
import MainMenu from './MainMenu';

const App = () => (

<Router>
<Header />
<Switch>

<Route path="/" exact component={ MainMenu } />
<Route path="/estudiantes" exact component={ Contenedor } />
<Route path="/estudiantes/:id" exact component={ EstudianteDetalle } />
<Route path="/contacto" exact component={ Contacto } />
<Route component={() => ( 
<h1>Página no encontrada</h1> 
    )} />

</Switch>
</Router>

)




export default App;
