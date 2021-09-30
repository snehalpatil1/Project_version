import axios from 'axios'

const USERS_API_BASE_URL="http://localhost:8080/spring_backend/vehicleBooking"

// axios.defaults.headers.common = {
//     ...axios.defaults.headers.common,
//     'Access-Control-Allow-Origin': 'http://localhost:8080/day15_spring_mvc/user',
//     "Content-Type": 'application/json'
//  };
//  axios.defaults.preflightContinue = true;
//  //axios.defaults.crossDomain = true;

class UserService
{

    
    getVehicleBooking()
    {
        return axios.get(USERS_API_BASE_URL+'/vbList')
    }

    getVehicleBookingById(id)
    {
        return axios.get(USERS_API_BASE_URL+'/'+id)
    }
    
    deleteVehicleBookingById(id)
    {
        return axios.delete(USERS_API_BASE_URL+'/'+id)
    }

    updateVehicleBookingById(id)
    {
        return axios.put(USERS_API_BASE_URL+'/'+id)
    }
}

export default new UserService()