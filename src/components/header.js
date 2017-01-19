import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {
    authButton() {
        return (
            <button>Sign in</button>
        )
    }

    render() {
        return (
            <nav>
                <h4>Secure App</h4>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/resources">Resources</Link>
                    </li>
                    <li>
                        { this.authButton() }
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header