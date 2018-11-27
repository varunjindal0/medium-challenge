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

class RightUserArea extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="outerMostContainerForRightSide">
        <div className="upperPortionContainer" >
          <div className="upperPortion">
            <h1>Your account</h1>
            <div>Tell us little more about youself</div>
          </div>
          <div className="upperPortionSide">

          </div>
            
        </div>
        <div className="lowerPortionContainer">
          <h6>Hi I am lowerPortion</h6>
        </div>
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
      <div className="App">
        <UpperBar isOpen={this.state.sideBarOpen} onSideBarControllerClick={this.onSideBarControllerClick}/>
        <div className="container">
          <div className="leftSide"><LeftOptionsSide isOpen={this.state.sideBarOpen} onSideBarControllerClick={this.onSideBarControllerClick} /></div>
          <div className="rightSide"><RightUserArea isOpen={this.state.sideBarOpen} onSideBarControllerClick={this.onSideBarControllerClick}/></div>
        </div>
      </div>
      );
    }else {
      return (
        <div className="App">
          <UpperBar isOpen={this.state.sideBarOpen} onSideBarControllerClick={this.onSideBarControllerClick}/>
          <RightUserArea isOpen={this.state.sideBarOpen} onSideBarControllerClick={this.onSideBarControllerClick}/>
        </div>
      )
    }
    
  }
}


export default App;
