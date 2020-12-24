import React, { Component } from 'react';
import Table from './components/Table';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      payload:null
    }
  }
  
  componentDidMount() {
    axios.get("https://canopy-frontend-task.now.sh/api/holdings")
      .then(res=>{
        if(res && res.data && res.data.payload){
          this.setState({payload:res.data.payload});
        }
      })
      .catch(err=>{console.log(err)})
  }
  render() {
    return (
      <div>
        {this.state.payload?<Table payload={this.state.payload}/>:<h1>Loading...</h1>}
      </div>
    );
  }
}

export default App;