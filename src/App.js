//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Contenedor from './Contenedor'
import Contacto from './Contacto'
import Header from './HeaderComponent'
import EstudianteDetalle from './EstudianteDetalle'
import MainMenu from './MainMenu';
import Mal from './Error';
import Footer from './FooterComponent';

const App = () => (

<Router>
<Header />
<Switch>

<Route path="/" exact component={ MainMenu } />
<Route path="/estudiantes" exact component={ Contenedor } />
<Route path="/estudiantes/:id" exact component={ EstudianteDetalle } />
<Route path="/contacto" exact component={ Contacto } />
<Route path="*" component={ Mal } />

</Switch>
<Footer />

</Router>

)




export default App;
