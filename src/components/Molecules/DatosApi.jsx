import React, { Component } from "react";


class DatosApi extends Component {

    constructor(props){
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/posts', {method: 'get'})
        .then(response => response.json())
        .then(dataResponse => {
            this.setState({
                posts: dataResponse
            })
        })
    }

    render(){
        const {posts} = this.state
        return (
            <>
            <div>
                {
                    posts.map(u => (
                        <>
                            <p>{u.id}</p>
                            <p>{u.title}</p>
                            <p>{u.body}</p> 
                            <hr/> 
                        </>                    
                    ))
                }
            </div>
            </>
        );
    }

}

export default DatosApi;