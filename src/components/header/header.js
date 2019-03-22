import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';
import ErrorBoundry from '../error-boundry/error-boundry';

const Header = () => {
    return (
        <ErrorBoundry>
        <div className="header d-flex">
            <h3>
                <Link to='/'>
                    StarDB
                </Link>
            </h3>
            <ul className="d-flex">
                <li>
                    <Link to='/people/'>People</Link>
                </li>
                <li>
                    <Link to='/planets/'>Planets</Link>
                </li>
                <li>
                    <Link to='/starships/'>Starships</Link>
                </li>
            </ul>
        </div>
        </ErrorBoundry>
    );
};

export default Header;