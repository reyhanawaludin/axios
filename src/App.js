import React, { Component } from 'react';
import Axios from 'axios';
import Post from './Components/Post';
import './App.css';

class App extends Component {
state={
  posts : [""]
}

  getDataFromApi = ()=>{
    Axios.get("http://192.168.11.118:4000/api/contohs")
    .then(res => {
      this.setState({
          posts : res.data
      })

      console.log(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  }

  
componentDidMount(){
  this.getDataFromApi()
}


  render() {
    var data = this.state.posts
  
    return (
      <div className="App">
     
        <Post data={this.state.posts[0]}/>
      </div>
    );
  }
}
export default App;
