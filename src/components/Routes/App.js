//import logo from './logo.svg';
import '../../assets/css/App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Contenedor from '../Molecules/Contenedor'
import Contacto from '../Molecules/Contacto'
import Header from '../Organisms/HeaderComponent'
import EstudianteDetalle from '../Pages/EstudianteDetalle'
import MainMenu from '../Pages/MainMenu';
import Mal from '../Pages/Error';
import Footer from '../Organisms/FooterComponent';
import DatosApi from '../Molecules/DatosApi'

const App = () => (

<Router>
<Header />
<Switch>

<Route path="/" exact component={ MainMenu } />
<Route path="/estudiantes" exact component={ Contenedor } />
<Route path="/estudiantes/:id" exact component={ EstudianteDetalle } />
<Route path="/contacto" exact component={ Contacto } />
<Route path="/datos_api" exact component={ DatosApi } />
<Route path="*" component={ Mal } />

</Switch>
<Footer />

</Router>

)




export default App;
