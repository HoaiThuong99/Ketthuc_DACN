import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Chude1 extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10">
                            <div className="menu" style={{ display: 'block' }}>
                                <Link to="/chude1/A"><img src="Image/chuA1.png" alt="" className="a chu" width="100px" height="100px" /></Link>
                                <Link to="/chude1/B"><img src="Image/chuB1.png" alt="" className="b chu" width="100px" height="100px" /></Link>
                                <Link to="/chude1/C"><img src="Image/chuC1.png" alt="" className="c chu" width="100px" height="100px" /></Link>
                                <Link to="/chude1/D"><img src="Image/chuD1.png" alt="" className="d chu" width="100px" height="100px" /></Link>
                                <Link to="/chude1/E"><img src="Image/chuE1.png" alt="" className="e chu" width="100px" height="100px" /></Link>
                                <Link to="/chude1/F"><img src="Image/chuF1.png" alt="" className="f chu" width="100px" height="100px" /></Link><br />
                                <Link to="/chude1/G"><img src="Image/chuG1.png" alt="" className="g chu" width="100px" height="100px" /></Link>
                                <Link to="/chude1/H"><img src="Image/chuH1.png" alt="" className="h chu" width="100px" height="100px" /></Link>
                                <Link to="/chude1/I"><img src="Image/chuI1.png" alt="" className="i chu" width="100px" height="100px" /></Link>
                                <Link to="/chude1/J"><img src="Image/chuJ1.png" alt="" className="j chu" width="100px" height="100px" /></Link>
                                <Link to="/chude1/K"><img src="Image/chuK1.png" alt="" className="k chu" width="100px" height="100px" /></Link>
                                <Link to="/chude1/L"><img src="Image/chuL1.png" alt="" className="l chu" width="100px" height="100px" /></Link><br />
                                <Link to="/chude1/M"><img src="Image/chuM1.png" alt="" className="m chu" width="100px" height="100px" /></Link>
                                <Link to="/chude1/N"><img src="Image/chuN1.png" alt="" className="n chu" width="100px" height="100px" /></Link>
                                <Link to="/chude1/O"><img src="Image/chuO1.png" alt="" className="o chu" width="100px" height="100px" /></Link>
                                <Link to="/chude1/P"><img src="Image/chuP1.png" alt="" className="p chu" width="100px" height="100px" /></Link>
                                <Link to="/chude1/Q"><img src="Image/chuQ1.png" alt="" className="q chu" width="100px" height="100px" /></Link>
                                <Link to="/chude1/R"><img src="Image/chuR1.png" alt="" className="r chu" width="100px" height="100px" /></Link><br />
                                <Link to="/chude1/S"><img src="Image/chuS1.png" alt="" className="s chu" width="100px" height="100px" /></Link>
                                <Link to="/chude1/T"><img src="Image/chuT1.png" alt="" className="t chu" width="100px" height="100px" /></Link>
                                <Link to="/chude1/U"><img src="Image/chuU1.png" alt="" className="u chu" width="100px" height="100px" /></Link>
                                <Link to="/chude1/V"><img src="Image/chuV1.png" alt="" className="v chu" width="100px" height="100px" /></Link>
                                <Link to="/chude1/W"><img src="Image/chuW1.png" alt="" className="w chu" width="100px" height="100px" /></Link>
                                <Link to="/chude1/X"><img src="Image/chuX1.png" alt="" className="x chu" width="100px" height="100px" /></Link><br />
                                <Link to="/chude1/Y"><img src="Image/chuY1.png" alt="" className="y chu" width="100px" height="100px" /></Link>
                                <Link to="/chude1/Z"><img  src="Image/chuZ.png" alt="" className="z chu" width="100px" height="100px" /></Link>
                                <Link to="/flipflop">
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

export default Chude1;