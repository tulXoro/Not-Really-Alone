import React, { Component } from 'react'
import './Header.css'
import logo from './logo.png';

class Header extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className="HeaderItems">
                <nav className="logo-cust">
                    <img src={logo} />
                </nav>
            </nav>
        )
    }
}

export default Header
