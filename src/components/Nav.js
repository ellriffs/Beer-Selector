import React from 'react';
import{ Link } from 'react-router-dom'
import '../styles/Nav.css';

const Nav = () => {
    return(
        <div className="Nav-Div">
            <ul className="nav-list">
                <li>
                    <Link to='/' className="list-item">Home</Link>
                </li>
                <li>
                    <Link to='/Search' className="list-item">Find Your Beer</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav;