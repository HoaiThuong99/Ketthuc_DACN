import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class chude2 extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10">
                            <div className="menu2" style={{ display: 'block' }}>
                                <Link to="/chude2/1"><img src="Image/1.jpg" alt="" className="color" width="150px" height="150px" /></Link>
                                <Link to="/chude2/2"><img src="Image/2.png" alt="" className="color" width="150px" height="150px" /></Link>                               
                                <Link to="/chude2/3"><img src="Image/3.jpg" alt="" className="color" width="150px" height="150px" /></Link>
                                <Link to="/chude2/4"><img src="Image/4.jpg" alt="" className="color" width="150px" height="150px" /></Link>
                                <Link to="/chude2/5"><img src="Image/5.jpg" alt="" className="color" width="150px" height="150px" /></Link><br />
                                <Link to="/chude2/6"><img src="Image/6.jpg" alt="" className="color" width="150px" height="150px" /></Link>
                                <Link to="/chude2/7"><img src="Image/7.jpg" alt="" className="color" width="150px" height="150px" /></Link>
                                <Link to="/chude2/8"><img src="Image/8.jpg" alt="" className="color" width="150px" height="150px" /></Link>
                                <Link to="/chude2/9"><img src="Image/9.jpg" alt="" className="color" width="150px" height="150px" /></Link>
                                <Link to="/chude2/0"><img src="Image/0.jpg" alt="" className="color" width="150px" height="150px" /></Link><br /><br />
                                <Link to="/home-number">
                                    <img src="Image/test.PNG" alt="" style={{ borderRadius: '20px', border: 'none' }} />
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <Link to="/home-theme">
                                    <img src="Image/backbutton.png" alt="" style={{ width: '50%'}} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default chude2;