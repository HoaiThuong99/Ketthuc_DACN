import React, { Component } from 'react';
import Auth from './service/Auth'
import Theme from './Theme';
import Headers from './Header'
import { Link } from 'react-router-dom';

class HomeThem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: Auth.getCurrentUser(),
            showModeratorBoard: false,
            showAdminBoard: false,
        };
    }
    logOut() {
        Auth.logout();
    }
    componentDidMount() {
        const user = Auth.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user,
                showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
                showAdminBoard: user.roles.includes("ROLE_ADMIN"),
            });
        }
    }

    render() {
        const { currentUser } = this.state;
        const { showAdminBoard } = this.state;
        return (
            <div>
                {currentUser && (
                    <div id="header">
                        <div style={{ marginRight: '25%', fontWeight:"bold", fontSize:"18px"}}>
                            <label style={{fontFamily:"thuong1"}}>Ten tai khoan: {currentUser.username}</label>
                        </div>
                        <div style={{ marginRight: '15%',  fontWeight:"bold", fontSize:"18px" }}>
                            <label style={{fontFamily:"thuong1"}}>level: </label>
                        </div>
                        <Link to="/login" onClick={this.logOut}>
                            <div className="btn btn-info nut" style={{ width: '100px', marginLeft: '150px' }}>Log Out</div>
                        </Link>
                        {showAdminBoard && (
                            <Link to={"/admin"}>
                                <div className="btn btn-info nut" style={{ width: 100, marginLeft: '50px' }}>Admin</div>
                            </Link>
                        )
                        }
                    </div>
                )
                }
                <Link to="/home">
                    <img src="Image/backbutton.png" alt="" style={{ width: '4%', top: 25, marginLeft: '1050px' }} />
                </Link>

                <Theme></Theme>
            </div >
        );
    }
}

export default HomeThem;