import React, { Component } from "react";
import axios from "axios";
import '../../assets/css/data.css';
import '../../assets/css/formulario.css';
import '../../assets/FA/css/all.min.css';



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
        axios.get('http://jsonplaceholder.typicode.com/posts')
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
          
            { posts.map((u) => (
              <>
              <body>
                 <div class="contender">
                  <div class="row">
                      <div class="col-md-6 col-sm-6">
                <div class="card krd">
                  <div class="card-body">
                    <h5 class="card-title">{u.id}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{u.title}</h6>
                    <p class="card-text">{u.body}</p>
                  </div>
                </div>
            </div>
            </div>
            </div>
              </body>
                        </>   
            )) }
          </>
        );
    }
    
}

export default DatosApi;