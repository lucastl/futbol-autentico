import React from 'react'
import { Link } from 'gatsby';

const Nav = () => {
    return (
        <nav>
            <Link
                to={'/'}
                activeClassName="nav-active"
            >
                Calendario
            </Link>
            <Link
                to={'/tabla-posiciones'}
                activeClassName="nav-active"
            >
                Posiciones
            </Link>
        </nav>
    );
}

export default Nav;