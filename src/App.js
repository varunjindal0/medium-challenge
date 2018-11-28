import React, { Component } from 'react';
// import Select from 'react-select';
// import Select, {Option, OptGroup} from 'rc-select';
import './App.css';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import {FaArrowRight, FaArrowLeft } from 'react-icons/fa';


class LeftOptionsSide extends Component {
  constructor(props){
    super(props);
    this.state={selectedOptionId: 'personal'}
  }

  trialFunction=(e)=>{
    console.log("I was clicked!"+e.target.id);
    this.setState({selectedOptionId: e.target.id}, ()=>{
      this.props.handleOptionSelect(this.state.selectedOptionId);
    })

  }

  render(){
    console.log()
    if(this.props.isOpen){
      return (
      <div>
        <h2 style={{marginTop: '10px', paddingBottom: '20px', marginBottom: '0px' , paddingLeft: '20px', borderBottom: '1px solid lightgrey'}} >Giselle</h2>
        <div id="mySidenav" style={{marginTop: '0px'}} className="leftOptionsArea sidenav">
          <a href="javascript:void(0)" style={{backgroundColor: 'account'==this.state.selectedOptionId?'lightgrey':'white', color: 'account'==this.state.selectedOptionId?'black':'#818181'}} id='account' onClick={(e)=>this.trialFunction(e)}>ACCOUNT</a>
          <a href="#" id='career' style={{backgroundColor: 'career'==this.state.selectedOptionId?'lightgrey':'white', color: 'career'==this.state.selectedOptionId?'black':'#818181'}} onClick={(e)=>this.trialFunction(e)}>Career</a>
          <a href="#" id='personal' style={{backgroundColor: 'personal'==this.state.selectedOptionId?'lightgrey':'white', color: 'personal'==this.state.selectedOptionId?'black':'#818181'}} onClick={(e)=>this.trialFunction(e)}>Personal</a>
          <a href="#" id='manage' style={{backgroundColor: 'manage'==this.state.selectedOptionId?'lightgrey':'white', color: 'manage'==this.state.selectedOptionId?'black':'#818181'}} onClick={(e)=>this.trialFunction(e)}>MANAGE</a>
          <a href="#" id='password' style={{backgroundColor: 'password'==this.state.selectedOptionId?'lightgrey':'white', color: 'password'==this.state.selectedOptionId?'black':'#818181'}} onClick={(e)=>this.trialFunction(e)}>Password</a>
          <a href="#" id='emailOption' style={{backgroundColor: 'emailOption'==this.state.selectedOptionId?'lightgrey':'white', color: 'emailOption'==this.state.selectedOptionId?'black':'#818181'}} onClick={(e)=>this.trialFunction(e)}>Email</a>
        </div>
      </div>    
      )
    }else {
      // ....Nothing
      return (
        <div className='sideBarCloseLeftSide'>
          <div style={{flex: '1', borderBottom: '1px solid lightgrey'}}></div>
          <div style={{flex: '3'}}></div>
        </div>
        )
    }
    
  }
}

class UpperBar extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div className="upperBar">
            <div style={{flex: 1, borderRight: this.props.isOpen?'1px solid lightgrey':null}} >
              <button className="button" style={{backgroundColor: this.props.isOpen?'red':'white', border: 'none', marginLeft: '20px', marginRight: '47px'}} onClick={this.props.onSideBarControllerClick}>{this.props.isOpen?<FaArrowRight color='white' />:<FaArrowLeft />}</button>
            </div>
            <div style={{flex: 5}}></div>
            <div className='upperBarUserDiv'>
              <span style={{fontSize: '10px'}} >Giselle</span>
              <button style={{backgroundColor: 'lightgrey', color: 'lightgrey'}} className="button">user</button>
            </div>
          </div>
      )
  }
}


class MyEmailForm extends Component{
  constructor(props){
    super(props);
    this.state={placeholder: null}
  }

  onFocus=(e)=>{
    var labelId = e.target.id + 'Label';
    document.getElementById(e.target.id).placeholder = '';
    document.getElementById(labelId).className = '';

  }

  onBlur=(e)=>{
    var labelId = e.target.id + 'Label';
    // document.getElementById(labelId).className = 'hidden';
     if(document.getElementById(e.target.id).value.length===0){
      document.getElementById(labelId).className = 'hidden';
      document.getElementById(e.target.id).placeholder = e.target.id==='email'?'New email':'Confirm new email';
    }else {
      document.getElementById(labelId).className = 'fadeColor';
    }
  }

  onInputChange=(e)=>{
    console.log("Input value was changed");
    var elem = document.getElementById(e.target.id)
    console.log(elem)
    if(elem.value.length!==0){
      elem.style.width = (1+elem.value.length)*8 + 'px';
    }else {
      elem.style.width = '100%'
    }
    // elem.style.width = elem.value.length*8 + 'px';

  }

  render(){
    const options = [
        'USA', 'INDIA', 'CANADA'
      ];
      const defaultOption = options[0];
    return (
      <div>
        <h6>Change email address</h6>
        <form action="#" className='myForm'>
          <label style={{fontSize: '10px'}} className='hidden' id='emailLabel' htmlFor="email">New email</label>
          <input type="email" id="email" name="email" placeholder="New email"  onFocus={(e)=>this.onFocus(e)} onBlur={(e)=>this.onBlur(e)} onChange={(e)=>this.onInputChange(e)} />

          <label style={{fontSize: '10px'}} className='hidden' id='confirmEmailLabel' htmlFor="confirmEmail">Confirm new mail</label>
          <input type="email" id="confirmEmail" name="confirmEmail" placeholder="Confirm your email" onFocus={(e)=>this.onFocus(e)} onBlur={(e)=>this.onBlur(e)} onChange={(e)=>this.onInputChange(e)}/>  
        </form>
       </div> 
      )
  }
}

class MyPersonalForm extends Component{
  constructor(props){
    super(props);
  }

  // onFocus=(e)=>{
  //   var labelId = e.target.id + 'Label';
  //   document.getElementById(e.target.id).placeholder = "";
  //   document.getElementById(labelId).className = '';

  // }

  // onBlur=(e)=>{
  //   var labelId = e.target.id + 'Label';
  //   // document.getElementById(labelId).className = 'hidden';
  //    if(document.getElementById(e.target.id).value.length===0){
  //     document.getElementById(labelId).className = 'hidden';
  //   }else {
  //     document.getElementById(labelId).className = 'fadeColor';
  //   }
  // }

  onFocus=(e)=>{
    var labelId = e.target.id + 'Label';
    document.getElementById(e.target.id).placeholder = '';
    document.getElementById(labelId).className = '';
  }

  onBlur=(e)=>{
    var labelId = e.target.id + 'Label';
    // document.getElementById(labelId).className = 'hidden';
     if(document.getElementById(e.target.id).value.length===0){
      document.getElementById(labelId).className = 'hidden';
      document.getElementById(e.target.id).placeholder = e.target.id==='fname'?'First name': e.target.id==='lname'?'Last name': 'Phone';
    }else {
      document.getElementById(labelId).className = 'fadeColor';
    }
  }

  onInputChange=(e)=>{
    console.log("Input value was changed");
    var elem = document.getElementById(e.target.id)
    console.log(elem.style)
    if(elem.value.length!==0){
      elem.style.width = (1+elem.value.length)*8 + 'px';
    }else {
      elem.style.width = '100%'
    }
    // elem.style.width = elem.value.length*8 + 'px';

  }

  onKeyPress=(e)=>{
    //  console.log("Key Pressed");
    // var elem = document.getElementById(e.target.id)
    // console.log(elem.style)
    // elem.style.width = (1+elem.value.length)*8 + 'px';

  }

  render(){
    const options = [
        'USA', 'INDIA', 'CANADA'
      ];
      const defaultOption = options[0];
    return (
      <div>
        <h6>Personal information</h6>
        <form action="#" className='myForm'>
          <label style={{fontSize: '10px'}} className='hidden' id='fnameLabel' htmlFor="fname">First Name</label>
          <input type="text" id="fname" onKeyPress={(e)=>{this.onKeyPress(e)}} name="firstname" placeholder="First name"  onFocus={(e)=>this.onFocus(e)} onBlur={(e)=>this.onBlur(e)} onChange={(e)=>this.onInputChange(e)} />

          <label style={{fontSize: '10px'}} className='hidden' id='lnameLabel' htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Last name" onFocus={(e)=>this.onFocus(e)} onBlur={(e)=>this.onBlur(e)} onChange={(e)=>this.onInputChange(e)}/>
          
          <label style={{fontSize: '10px'}} className='hidden' id='phoneLabel' htmlFor="phone">Phone</label>
          <input type="text" id="phone" name="phone" placeholder="Phone" onFocus={(e)=>this.onFocus(e)} onBlur={(e)=>this.onBlur(e)} onChange={(e)=>this.onInputChange(e)}/>

          <label style={{fontSize: '10px', marginTop: '10px'}} className='' htmlFor="country">Country</label>
          <Dropdown options={options} id='country' controlClassName='myClass'  value={defaultOption} placeholder="Select an option" />

          
        </form>
       </div> 
      )
  }
}

class RightUserArea extends Component {
  constructor(props){
    super(props);
  }

  render(){
     var contentIdSelected = this.props.contentIdSelected;
     var elemToRender = null;
    if(contentIdSelected==='personal'){
      elemToRender = <MyPersonalForm />
    }else if(contentIdSelected==='emailOption'){
      elemToRender = <MyEmailForm />
    }else {
      elemToRender = contentIdSelected;
    }
    return (
      <div className="outerMostContainerForRightSide">
        <div className="upperPortionContainer" >
          
          <div className="upperPortion">
            <div style={{flex: '9'}}></div>
            <div style={{flex: '5'}}>
              <h1>Your account</h1>
              <div style={{fontSize: '13px', textAlign: 'center'}}>Tell us little more about youself</div>
            </div>
            <div style={{flex: '9'}}></div>
          </div>
          <div className="upperPortionSide">

          </div>
        </div>
        <div className="lowerPortionContainer">
          <div className="lowerPortion">
            <div style={{flex: '8'}}></div>
            <div className="mainForm">
              {elemToRender}
            </div>
            <div style={{flex: '8'}}></div>
            
          </div>
          <div className="lowerPortionSide">
          </div>
        </div>
      </div>  
      )
  }
 }

class App extends Component {
  constructor(props){
    super(props);
    this.state={sideBarOpen: true, contentIdSelected: 'personal'}
  }

  onSideBarControllerClick = ()=>{
    console.log("I am in onSideBarControllerClick funtion")
    // toogle state of sideBarOpen
    this.setState({sideBarOpen: !this.state.sideBarOpen}, ()=>{
      console.log("Side bar state toggles: "+this.state.sideBarOpen);
    })
  }

  handleOptionSelect = (id)=>{
    this.setState({contentIdSelected: id});
  }

  render() {
     if(this.state.sideBarOpen){
      return (
      <div className="App">
        <UpperBar isOpen={this.state.sideBarOpen} onSideBarControllerClick={this.onSideBarControllerClick}/>
        <div className="container">
          <div className="leftSide" style={{borderRight: this.state.sideBarOpen?'1px solid lightgrey':null}}><LeftOptionsSide handleOptionSelect={this.handleOptionSelect} isOpen={this.state.sideBarOpen} onSideBarControllerClick={this.onSideBarControllerClick} /></div>
          <div className="rightSide"><RightUserArea contentIdSelected={this.state.contentIdSelected} isOpen={this.state.sideBarOpen} onSideBarControllerClick={this.onSideBarControllerClick}/></div>
        </div>
      </div>
      );

    }else {
      var contentIdSelected = this.state.contentIdSelected;
      var elemToRender = null;
      if(contentIdSelected==='personal'){
        elemToRender = <MyPersonalForm />
      }else if(contentIdSelected==='emailOption'){
        elemToRender = <MyEmailForm />
      }else {
        elemToRender = contentIdSelected;
      }
      return (
      <div className="App">
        <UpperBar isOpen={this.state.sideBarOpen} onSideBarControllerClick={this.onSideBarControllerClick}/>
        <div className='sideBarCloseContainer' >
          <div style={{borderBottom: '1px solid lightgrey', paddingBottom: '60px'}} >
            <div>
              <h1 style={{textAlign: 'center'}}>Your account</h1>
              <div style={{fontSize: '13px', textAlign: 'center'}}>Tell us little more about youself</div>
            </div>
          </div>
          <div className='sideBarCloseLowerPortion'>
              <div style={{flex: '12.66'}}></div>
              <div className="mainForm">
                {elemToRender}
              </div>
              <div style={{flex: '12.66'}}></div>
          </div>
        </div>
      </div>
      )
    }
    
  }
}


export default App;
