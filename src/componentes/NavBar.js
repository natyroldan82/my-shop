import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
export const NavBar = () =>{
    return(
        <div className="container">
            <nav className="nav">
                <div className="nav-brand">
                    <NavLink className="nav_link" to = '/'></NavLink>
                </div>
                <ul className="nav_list">
                    <li>
                        <NavLink className="nav_link" to='/categoria'>iphone</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav_link" to='/categoria'>Accesorios</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav_link" to='/cart'>
                            <CartWidget/>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default NavBar;