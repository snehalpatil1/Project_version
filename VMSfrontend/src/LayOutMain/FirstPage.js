import React from 'react'
import { Nav,Navbar } from "react-bootstrap-navbar";

import { BrowserRouter as Router, Link, Switch,Route } from 'react-router-dom';
import Login from './Login'


class FirstPage extends React.Component{
    render()
    {
        return(
            <div>
              welcome
                 {/* <Router>
                  <div className="App container py-3">
              <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
                {/* <Navbar.Brand href="/" className="font-weight-bold text-muted">
                  Scratch
                </Navbar.Brand>
                <Navbar.Toggle /> 
                <Navbar.Collapse className="justify-content-end">
                  <Nav>
                    {/* <Nav.Link as={Link} to={"/Login"}>Login</Nav.Link> */}
                    {/* <Nav.Link as={Link} to={"/FirstPage"}>FirstPage</Nav.Link> 
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              
            </div>
            <div>
            <Switch>
                            <Route exact path="/Login"> <Login /></Route>
                            {/* <Route exact path="/FirstPage" component={FirstPage}/> 
                           
            </Switch>
            </div>
             </Router> */}
            </div>
          )
    }
}

export default FirstPage