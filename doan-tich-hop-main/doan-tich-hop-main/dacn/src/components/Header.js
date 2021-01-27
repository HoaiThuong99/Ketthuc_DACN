import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../components/service/Auth'
class Header extends Component {
    logOut() {
        Auth.logout();
    }
    render() {
        return (
            <div id="header">
                <div style={{ marginRight: '25%' }}>
                    <label>Tên tài khoản: {this.props.tendn}</label>
                </div>
                <div style={{ marginRight: '15%' }}>
                    <label>level: </label>
                </div>
                <Link to="/login" onClick={this.logOut}>
                    <div className="btn btn-info nut" style={{ width: '100px', marginRight:'100px' }}>Log Out</div>
                </Link>
                <Link to="/home">
                    <img src="Image/backbutton.png" alt="" style={{ width: '30%', top: 25 }} />
                </Link>
            </div>
        );
    }
}

export default Header;