import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

  export default class Login extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        username: "",
        password: "",
        loading: false,
        message: ""
      };
    }
    
    
      
      render() {
        return (
         
          <div className="col-md-12" >
            <div class="card card-container" style={{borderRadius:"25px"}}>

              <img 
                src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                alt="profile-img"
                className="profile-img-card"
              />
              
              <Form 
                onSubmit={this.handleLogin}
                ref={c => {
                  this.form = c;
                }}
              >
    
                <div className="form-group" >
                  <label htmlFor="username" style={{color:"blue"}}>Username:</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required]}
                  />
                </div>
    
                <div className="form-group">
                  <label htmlFor="password" style={{color:"blue"}}>Password:</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required]}
                  />
                </div>
                <br></br>
    
                <div className="form-group" >
                  <center><button
                    className="btn btn-light btn-block"
                    disabled={this.state.loading}
                  >
                    {this.state.loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Login</span>
                  </button></center>
                </div>
    
                {this.state.message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {this.state.message}
                    </div>
                  </div>
                )}
                <CheckButton
                  style={{ display: "none" }}
                  ref={c => {
                    this.checkBtn = c;
                  }}
                />
              </Form>
              </div>
            </div>
        
        );
      }
    }
