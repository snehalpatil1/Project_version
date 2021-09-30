import React from 'react'

import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Register from './Register'
import Users from './Users'
import ViewUser from './ViewUser'
import Dashboard from './Dashboard'
import User from './User'
import EditUser from './EditUser'
import EditVehicle from './EditVehicle'
import UpdateUser from './UpdateUser'
import AddUser from './AddUser'
import Vehicles from './vehicles'
import VehiclesForCustomers from './VehiclesForCustomers'
import BookVehicle from './BookVehicle'
import VehicleUsage from './VehicleUsage'
import VehicleForDrivers from './VehicleForDrivers'
import DeleteUser from './DeleteUser'
import EditBooking from './EditBooking'
import EditUsage from './EditUsage'
import Booking from './Booking'


class NavbarComp extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#">scroll button</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to={"/++"}>Home</Nav.Link>
                                <Nav.Link as={Link} to={"/Login"}>Login</Nav.Link>
                                {/* <Nav.Link as={Link} to={"/Register"}>Register</Nav.Link> */}
                                <NavDropdown title="Link" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Feeback And Quieries</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Complaind and Suggestion</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">Important Web pages</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">Miscellenious</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#" disabled>   Message to admin  </Nav.Link>
                                <Nav.Link href="#" disabled>   Email us  </Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="mr-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>

                    <div>
                        <Switch>

                            <Route path="/Home">
                                <Home />
                            </Route>

                            <Route path="/Login">
                                <Login />
                            </Route>

                            <Route path="/Register">
                                <Register />
                            </Route>

                            <Route path="/Users">
                                <Users />
                            </Route>

                            <Route path="/Booking">
                                <Booking />
                            </Route>



                            <Route path="/VehiclesForCustomers">
                                <VehiclesForCustomers />
                            </Route>


                            <Route path="/VehicleForDrivers">
                                <VehicleForDrivers />
                            </Route>
                            <Route path="/Vehicles">
                                <Vehicles />
                            </Route>

                            <Route path="/Dashboard">
                                <Dashboard />
                            </Route>

                            <Route path="/user/adduser" component={AddUser}>
                                <AddUser />
                            </Route>


                            <Route path="/vehicle/vehicleId" component={BookVehicle}>
                                <BookVehicle />
                            </Route>

                           
                            <Route path="/vehicle/vehicleUsage" component={VehicleUsage}>
                                <VehicleUsage />
                            </Route>

                            <Route path="/EditUser" component={EditUser} />

                            <Route path="/EditBooking" component={EditBooking} />

                            <Route path="/EditUsage" component={EditUsage} />

                            <Route path="/EditVehicle" component={EditVehicle} />

                            <Route path="/user/edit/:userId" component={UpdateUser}>
                            </Route>

                            <Route path="/user/delete/:userId" component={DeleteUser}>
                            </Route>

                            <Route path="/user/:email">
                                <ViewUser />



                            </Route>


                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default NavbarComp