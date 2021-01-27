import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Chude3 extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10">
                            <div className="menu3" style={{ display: 'block' }}>
                                <Link to="/chude3/red"><img src="Image/red.jpg" alt="" className="color" width="100px" height="100px" /></Link>
                                <Link to="/chude3/blue"><img src="Image/blue.jpg" alt="" className="color" width="100px" height="100px" /></Link>                               
                                <Link to="/chude3/purple"><img src="Image/violet.jpg" alt="" className="color" width="100px" height="100px" /></Link>
                                <Link to="/chude3/orange"><img src="Image/orange.jpg" alt="" className="color" width="100px" height="100px" /></Link>
                                <Link to="/chude3/black"><img src="Image/black.jpg" alt="" className="color" width="100px" height="100px" /></Link><br />
                                <Link to="/chude3/white"><img src="Image/white.jpg" alt="" className="color" width="100px" height="100px" /></Link>
                                <Link to="/chude3/green"><img src="Image/green.png" alt="" className="color" width="100px" height="100px" /></Link>
                                <Link to="/chude3/yellow"><img src="Image/yellow.jpg" alt="" className="color" width="100px" height="100px" /></Link>
                                <Link to="/chude3/brown"><img src="Image/brown.png" alt="" className="color" width="100px" height="100px" /></Link>
                                <Link to="/chude3/pink"><img src="Image/pink.jpg" alt="" className="color" width="100px" height="100px" /></Link><br /><br />
                                <Link to="/home-english">
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

export default Chude3;