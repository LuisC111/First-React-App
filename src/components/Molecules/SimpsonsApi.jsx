import React, { Component } from "react";
import axios from "axios";
import '../../assets/css/dataS.css';
import '../../assets/FA/css/all.min.css';
import '../../assets/css/formulario.css';
import { Link } from 'react-router-dom'




class DatosApi extends Component {

    constructor(props){
        super(props);

        this.state = {
            posts: []
        }
    }



    /*
    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/photos', {method: 'get'})
        .then(response => response.json())
        .then(dataResponse => {
            this.setState({
                posts: dataResponse
            })
        })
    }
    */

    componentDidMount(){
        axios.get('https://my-json-server.typicode.com/LuisC111/DataJSON/personajes')
        .then(resp => {
            this.setState({
                posts: resp.data
            })
        })
    }

    render(){
        const {posts} = this.state

        return (
          <>
            {posts.map((u) => (
              <>
              <body class="sb">
                
                <center>
                <div class="contendere">
                  <div class="row justify-content-md-center align-items-center">
                    <div class="col-md-6 col-sm-6">
                      <div class="card krd">
                        <img
                          src={u.url}
                          className="card-img-top simpsonApi"
                          alt="..."
                        />
                        <div class="card-body">
                          <h5 class="card-title">{u.nombre}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">Edad: {u.edad}</li>
                          <li class="list-group-item">Genero: {u.genero}</li>
                          <li class="list-group-item">Grado: {u.grado}</li>
                        </ul>
                        <div class="card-body">
                        <p><Link to={ `/simpsons_api/${u.id}` }>Detalle</Link></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div><br/>
                </center>
                </body>

              </>
            ))}
          </>
        );
    }
    
}


export default DatosApi;