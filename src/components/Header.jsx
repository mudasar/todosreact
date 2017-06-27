import React from 'react';
import { NavLink } from 'react-router-dom';


export const Header = (props) => {
    return (
        <div>
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="dropdown menu" data-dropdown-menu>
                        <li className="menu-text">Todo App</li>
                        <li>
                            <NavLink exact to="/todos" activeClassName="button" >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeClassName="button">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName="button">About</NavLink>
                        </li>
                        
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li>
                            <NavLink to="/logout" activeClassName="success" className="button">Logout</NavLink>
                        </li>
                        {/*<li><input type="search" placeholder="Search"/></li>
                        <li>
                            <button type="button" className="button">Search</button>
                        </li>*/}
                    </ul>
                </div>
            </div>
            {props.children}
        </div>
    )
}

export default Header;