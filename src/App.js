import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SingerList from './SingerList';
import { someData } from './SingerData';

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      status: 'list'
    }
  }
  handleClick = (status) => {
    this.setState({
      status
    })
  }
  return = () => {
    this.setState({
      status: 'list'
    })
  }
  render() {
    return (
      <div className="App">
        <input />
        { this.state.status === 'list' ?  <SingerList testData ={someData} changeStatus={this.handleClick} return={this.return}/>
        : <div> singer detail 
            <button onClick={this.return}>back</button> 
          </div> }
      </div>
    );
  }
}

export default App;
