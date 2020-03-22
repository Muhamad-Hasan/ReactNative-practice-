import React, {Component} from 'react';

import Hello from './Hello';

export default class HelloWorldApp extends Component{
  constructor(){
    super();
    this.state = {
      username : "Kissa Fatima "
    }
    this.update = this.update.bind(this);
  }
  
  update(){
    //alert("this is alisha Hassan")
     this.setState({
       username : "Batto Bi"
     });   
  }

  render(){
    return(
      <Hello myState={this.state.username} update = {this.update}/>
    );
  }
}
