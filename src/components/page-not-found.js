import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class PageNotFound extends Component {
    render() {
        return (
            <div>
                <h1>Page Not Found</h1>
                <NavLink to="/" className="nav-btn">Go Back</NavLink>
            </div>
        );
    }
}

export default PageNotFound;