import React from 'react';
import Logo from '../images/LOGO.png'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";





class Header extends React.Component{
    render(){
        return(
            <div className="header1">
                <img className='Logo' src={Logo} />


                <select className="selectOption">
                    <option value="karachi">Karachi</option>
                    <option value="lahore">Lahore</option>
                    <option value="quetta">Quetta</option>
                    <option value="peshawar">Peshawar</option>
                </select>

                <input  className="MainInput" type="text" placeholder="Find Cars ,Mobile Phones and more"></input>

                <Link to={'/signup'}style={{color:'black',textDecoration: 'none'}}><a  className="loginLink" href="#">Login</a></Link>
                <button  className="sellButton">Sell</button>
            </div>
            
        )
    }
}

export default Header;