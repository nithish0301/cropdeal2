import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import './styles.css';
export default class Home extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        content: ""
      };
    }
  
    
    
  
    render() {
      return (
        <div className="home">
        <div className="container">
          <header className="jumbotron">
            <h3>{this.state.content}</h3>
          </header>
          <div className="image" >
          <h1 style={{paddingTop:"25px"}}><center>WELCOME TO CROP-DEAL WEBSITE!</center></h1>
          <h1 ><center>BUY crops straight from the farmer</center></h1>
          {/* <h1 style={{paddingTop:"50px"}} className="blink_me"><center> </center></h1> */}
        </div>
        </div>
        </div>
      );
    }
  }