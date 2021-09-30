import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
   email: "",  
   password:"",
   contactNumber:"",
   name:"",
   addressLine1:"",
   addressLine2:"",
   state:"",
   city:"",
   pincode:""


  });

  const {  email,password,contactNumber, name,addressLine1,addressLine2,state,city,pincode } = user;
  const onInputChange = e => {
    setUser({ ...user,[e.target.name]:e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    console.log(user)
    await axios.post("http://localhost:8080/spring_backend/user/register",user);
    history.push("/User");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>

        <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              
              onChange={e => onInputChange(e)}
            />
          </div>


          <div className="form-group">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Enter Your password"
              name="password"
              
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your contact number"
              name="contactNumber"
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="String"
              className="form-control form-control-lg"
              placeholder="Enter Your name"
              name="name"
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter addressLine One"
              name="addressLine1"
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter addressLine two"
              name="addressLine2"
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <div className="form-group">
            <input
              type="String"
              className="form-control form-control-lg"
              placeholder="Enter state"
              name="state"
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter pincode"
              name="pincode"
              onChange={e => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="city"
              className="form-control form-control-lg"
              placeholder="Enter city "
              name="city"
              onChange={e => onInputChange(e)}
            />
          </div>
         
          

        
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser