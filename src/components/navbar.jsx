import React, { Component } from 'react';
class NavBar extends Component {

    render() { 
        return (
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar count <span>{this.props.totalCounters}</span></a>
                    </div>
            </nav>
        );
    }
}
 
export default NavBar;