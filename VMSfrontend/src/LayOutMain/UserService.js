import axios from 'axios'

const USERS_API_BASE_URL="http://localhost:8080/spring_backend/user"

// axios.defaults.headers.common = {
//     ...axios.defaults.headers.common,
//     'Access-Control-Allow-Origin': 'http://localhost:8080/day15_spring_mvc/user',
//     "Content-Type": 'application/json'
//  };
//  axios.defaults.preflightContinue = true;
//  //axios.defaults.crossDomain = true;

class UserService
{

    
    getUsers()
    {
        return axios.get(USERS_API_BASE_URL+'/uList')
    }

    getUserById(id)
    {
        return axios.get(USERS_API_BASE_URL+'/'+id)
    }
    
    deleteUserById(id)
    {
        return axios.delete(USERS_API_BASE_URL+'/'+id)
    }

    updateUser(id)
    {
        return axios.put(USERS_API_BASE_URL+'/'+id)
    }
}

export default new UserService()