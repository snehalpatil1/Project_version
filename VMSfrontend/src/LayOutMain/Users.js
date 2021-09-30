
import React, { Component } from 'react';
import UserService  from './UserService';
import { Link } from "react-router-dom";
import  {  useEffect } from "react";

class ListUserComponent extends Component{

    constructor(props) {
        console.log("User constructor");
        super(props)

        this.state = {
            user: []
        }

        // useEffect(() => {
        //     loadUsers();
        //   }, []);
        

        // this.addEmployee = this.addEmployee.bind(this);
        // this.editEmployee = this.editEmployee.bind(this);
        // this.deleteEmployee = this.deleteEmployee.bind(this);
    }
//change delete with glyficon or google icon
    deleteUser(userId){
        UserService.deleteUserById(userId).then( res => {
        this.setState({user: this.state.user.filter(user=> user.userId !== userId)});
        });
    }
    // viewUser(email){
    //     console.log("User emailid=" +email);
    //     //no need of link in hstory.push
    //     this.props.history.push('/ViewUserComponent');

    // }
    //  loadUsers = async () => {
    //     const result = await axios.get("http://localhost:9898/api/users");
    //     setUser(result.data.reverse());
    //   };


    // editEmployee(id){
    //     console.log("user id=" +id);
    //     this.props.history.push(`add-user/${id}`)
    // }

    componentDidMount(){
        UserService.getUsers().then((res) => {
            this.setState({ user: res.data});
            console.log(res.data)
        });
    }

    addUser(){
        console.log("Add new user" );
    }
   render() {
        return (
            <div>
                 <h2 className="text-center">User List</h2>
                 <div className = "row">
                    <Link class="btn btn-outline-primary mr-2" to={`/user/adduser`} >Add User </Link>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> User  Id</th>
                                    <th> User Email Id</th>
                                    <th> User Password</th>
                                    <th> User Contact Number</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.user.map(
                                        user => 
                                        <tr key = {user.email}>
                                             <td> {user.userId} </td> 
                                             <td> {user.email} </td>   
                                             <td> {user.password}</td>
                                             <td> {user.contactNumber}</td>
                                             <td>
                                                 {/* <button onClick={ () => this.editUser(user.email)} className="btn btn-info">Update </button> */}
                                                 <Link class="btn btn-outline-primary mr-2" to={`/user/edit/${user.userId}`} >  Edit </Link>
                                                 {/* <Link class="btn btn-outline-primary mr-2" to={`/user/delete/${user.userId}`} >  delete </Link> */}
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(user.userId)} className="btn btn-danger">Delete </button>
                                                 {/* <Link class="btn btn-primary mr-2" to={`/user/${user.email}`}>View </Link> */}
                                                 <Link className="btn btn-primary" to={`/user/${user.userId}`}>View</Link>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                 </div>
                 
            </div>
        )
    }

    
}

export default ListUserComponent;