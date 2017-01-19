import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class Header extends Component {
    isAuth() {
        return this.props.authenticate(!this.props.authenticated)
    }
    
    authButton() {
        if(this.props.authenticated) {
            return (
                <button onClick={ () => this.isAuth() } >Sign out</button>
            )
        }
        
        return (
                <button onClick={() => this.props.authenticate(true)}>Sign in</button>
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

function mapStateToProps(state) {
    return {
        authenticated: state.authenticated
    }
}

export default connect(mapStateToProps, actions)(Header)