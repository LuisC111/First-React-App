import React, { Component } from "react";
import axios from "axios";
import '../../assets/css/dataS.css';
import '../../assets/FA/css/all.min.css';
import '../../assets/css/simp.css';
import { Link } from 'react-router-dom'



class SimpsonDetalle extends Component {

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
        
        let paths = window.location.pathname.split('/');
        let id = paths[paths.length-1];
        axios.get(`https://my-json-server.typicode.com/LuisC111/DataJSON/personajes/${id}`)
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
                <body>
                <center>
                <div class="contendere">
                  <div class="row justify-content-md-center align-items-center">
                    <div class="col-md-6 col-sm-6">
                      <div class="card krd">
                        <img
                          src={posts.url}
                          className="card-img-top simpsonApi"
                          alt="..."
                        />
                        <div class="card-body">
                          <h5 class="card-title">{posts.nombre}</h5>
                          <p class="card-text">{posts.descripcion}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">Edad: {posts.edad}</li>
                          <li class="list-group-item">Genero: {posts.genero}</li>
                          <li class="list-group-item">Grado: {posts.grado}</li>
                        </ul>
                        <div class="card-body">
                        <a href={`/simpsons_api`}>Ver todos</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div><br/>
                </center>
              </body>
          </>
        );

    
}
}


export default SimpsonDetalle;