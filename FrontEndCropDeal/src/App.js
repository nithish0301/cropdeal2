
import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles.css';
import './App.css';
import Login from "./component/Login";
import Register from "./component/Register";






import Home from "./component/Home";



import About from "./component/About";



class App extends Component {
  constructor(props) {
    super(props);
    
  
    this.state = {
      showFarmerBoard: true,
      showAdminBoard: false,
      showDealerBoard:false,
      currentUser: false,
    };
  }
  

  
 

    
    render() {
      const { currentUser, showAdminBoard,showFarmerBoard,showDealerBoard } = this.state;
    
      return (
        <div className="picture">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/"} className="navbar-brand">
             CROP DEAL!
            </Link>
            <div className="navbar-nav mr-auto">
              <li style={{paddingTop:"7px"}}className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>
              <li style={{paddingTop:"7px"}} className="nav-item">
                <Link to={"/about"} className="nav-link">About
                </Link>
              </li>
    
              {showDealerBoard && (
                  <div className="navbar-nav ml-auto">
                            <li className="nav-item" >
                            
                  
                             <Link to={""} className="nav-link" style={{paddingTop:"15px"}} >Dealer</Link>
                            </li>
                            <li  className="nav-item">
                            <Link to={"/crop"} className="nav-link" style={{paddingTop:"15px"}}> View Crops</Link>
                            </li>
                            <li  className="nav-item">
                            <Link to={"/view-cart"} className="nav-link" style={{paddingTop:"15px"}} > Cart</Link>
                            </li>
                            </div>
                          )}
        
           
            
              
              {showFarmerBoard && (
    
                <><li className="nav-item">
                  <Link to={""} className="nav-link" style={{ paddingTop: "15px" }}>Farmer</Link>
                </li>
                <li style={{ paddingTop: "7px" }} className="nav-item">
                    <Link to={"/crops"} className="nav-link">
                      Edit Crops
                    </Link>
                  </li></>
              )}
    
              {showAdminBoard && (
                <div className="navbar-nav ml-auto">
                <li className="nav-item">

                            <Link to={""} className="nav-link" style={{paddingTop:"20px", fontSize:"13px"}} >Admin</Link>
                            </li>
                            <li  className="nav-item"><Link to={"/crop"} className="nav-link" style={{paddingTop:"20px", whiteSpace: "nowrap", fontSize:"13px"}}>ViewCrops</Link></li>
                          
                            <li  className="nav-item"><Link to={"/register"} className="nav-link" style={{paddingTop:"20px", whiteSpace: "nowrap", fontSize:"13px"}}> New User</Link></li>
                          
                            
                </div>
              )}
            </div>
    
            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li style={{paddingTop:"10px"}}className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
            </Link>
            </li>
                <li style={{marginLeft:"900px",paddingTop:"10px"}}className="nav-item" >
                  <a href="/login" className="nav-link" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li style={{paddingTop:"9px"}} className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>
                <li style={{paddingTop:"9px"}} className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </nav>
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>

      
    </div>
  );
}
}

export default App;
