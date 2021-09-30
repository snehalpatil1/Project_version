import React, { useState } from "react";
import axios from 'axios'
import { useHistory ,useParams} from "react-router-dom";

const BookVehicle = () => {
  let history = useHistory();
  const { vehicleId } = useParams();
  const [vehicleBooking, setVehicleBooking] = useState({
     
    fromPlace:"",
    toPlace:"",
  });

  const {  fromPlace,toPlace } = vehicleBooking;
  const onInputChange = e => {
    setVehicleBooking({ ...vehicleBooking,[e.target.name]:e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    console.log(vehicleBooking)
    console.log(vehicleId)
    await axios.post("http://localhost:8080/spring_backend/vehicleBooking/addBooking",vehicleBooking);
    history.push("/vehicle/VehicleUsage");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">pls Confirm Details</h2>
        <form onSubmit={e => onSubmit(e)}>

       


        
          <div className="form-group">
            <input
              type="String"
              className="form-control form-control-lg"
              placeholder="Enter Your Place of Booking"
              name="fromPlace"
              value={fromPlace}
              onChange={e => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="String"
              className="form-control form-control-lg"
              placeholder="Enter Your Place Booking upto"
              name="toPlace"
              value={toPlace}
              onChange={e => onInputChange(e)}
            />
          </div>

        
        
          <button className="btn btn-primary btn-block">Confirm your Booking </button>
        </form>
      </div>
    </div>
  );
};

export default BookVehicle