import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9">
                        <div id="logo">
                            <img src="Image/Logo.gif" alt="" width="100%" height="22%" />
                        </div>
                        <div className="play">
                            <Link to="/home-theme">
                                <img src="Image/PlayButton1.png" alt="" className="button1" width="29%" />
                                <img src="Image/PlayButton2.png" alt="" className="button2" width="29%" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="login">
                            <Link to="/login">
                                <img src="Image/LoginButton1.jpg" alt="" className="login1" />
                                <img src="Image/LoginButton2.jpg" alt="" className="login2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;