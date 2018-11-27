import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class LeftOptionsSide extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <p>I am left side</p>
      </div>    
      )
  }
}

class UpperBar extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div className="upperBar">
            <div>
              <button onClick={this.props.onSideBarControllerClick}>-></button>
            </div>
            <div>
              <label>Giselle</label>
              <button>user</button>
            </div>
          </div>
      )
  }
}

class LeftSide extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        
      </div>  
      )
  }
}

class MiddleSide extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        
      </div>  
      )
  }
}

class RightSide extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        
      </div>  
      )
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={sideBarOpen: true}
  }

  onSideBarControllerClick = ()=>{
    console.log("I am in onSideBarControllerClick funtion")
    // toogle state of sideBarOpen
    this.setState({sideBarOpen: !this.state.sideBarOpen}, ()=>{
      console.log("Side bar state toggles: "+this.state.sideBarOpen);
    })
  }

  render() {
    if(this.state.sideBarOpen){
      return (
        <LeftSide />
        <RightSide />
      
      )
  }
}


export default App;
