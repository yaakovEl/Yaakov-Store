
import React from  'react'
import {NavLink} from 'react-router-dom'
import StyledNavbar from './styled/Navbar'


const Navbar = ({orders, handleLogout, user}) => {
        return <StyledNavbar>
       <NavLink to='/' className="logo"><img id="logo-img" src="./images/logo.png" alt=""/>Yaakov Elos-Cart</NavLink>

<ul className="links">
    <li><NavLink className="link" id="order" to='/cart'>
        <img className="image" src='./images/shopping_cart.png' alt=""/>
        {orders} Items</NavLink></li>
    

    
    
</ul>

        </StyledNavbar>;
    
}
 
export default Navbar;