
import React from 'react';
// import { useHistory } from 'react-router-dom';

const Hello =() =>{
    // const history=useHistory();

    // var customer=JSON.parse(localStorage.getItem("customer"));
    // console.log("Retrived data "  + customer.firstname);

    // const handleGoodbyeClick=()=>{
    //     console.log(" Goodbye button is Clicked...");
    //     history.push('/goodbye');
    // }

    // const handleLoginClick=()=>{
    //     console.log(" Login button is Clicked...");
    //    history.push('/login');
    // }

    return(
            <div>
                <h2>Welcome Again .</h2>
                {/* <button onClick={handleGoodbyeClick}>GoodBye</button><br/>
                <button onClick={handleLoginClick}>Sign In</button> */}
            </div>
    );
}
export default Hello