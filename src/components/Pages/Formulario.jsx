import React , {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/FA/css/all.min.css';


class Formulario extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        nombre: "nombre usuario",
        apellido: "apellido usuario"
    }

    this.cambiarNombre = this.cambiarNombre.bind(this);
    this.cambiarApellido = this.cambiarApellido.bind(this);
    let elemento = document.getElementById('elemento')
    console.log(elemento)


  }

  cambiarNombre (e) {
    this.setState({
        nombre: e.target.value
    })
  }

  cambiarApellido (e) {
    this.setState({
        apellido: e.target.value
    })
  }

  

  render() {
    return (
      <div id="elemento">
        <h1>Formulario</h1>
        <center>
        <form action="">
        <br /><label htmlFor="">Nombre</label><br />
          <input type="text" name="nombre" onChange={ this.cambiarNombre } /><br />
          <label htmlFor="">Apellido</label><br />
          <input type="text" name="apellido" onChange={ this.cambiarApellido } /><br />

          <br /><input type="submit" value="Enviar" /><br />
        </form>
        </center>
        <br />
        <br />
        <h3>{ `Nombre: ${this.state.nombre}` }</h3>
        <h3>{ `Apellido: ${this.state.apellido}` }</h3>

      </div>
    )
  }


componentDidMount(){
    let elemento = document.getElementById('elemento')
    console.log(elemento)
}

componentDidUpdate(prevProps, prevState){
    console.log(prevState)
    console.log(prevProps)
    console.log("----------------")
}

}

export default Formulario;
