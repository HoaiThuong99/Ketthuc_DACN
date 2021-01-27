import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Theme extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = { trangthai: 1}
    }

    rendernd1 = () => (
        <div className="hienthi1" id="nd1">
            <img src="Image/cd1_1.jpg" alt width="70%" height="370px" /> <br />
            <Link to="/chude1"><div className="btn btn-info nut" style={{ width: 130 }}>Learn</div></Link>
        </div>
    )

    rendernd2 = () => (
        <div className="hienthi1" id="nd2">
            <img src="Image/cd2_2.jpg" alt width="70%" height="370px" /> <br />
            <Link to="/chude2"><div className="btn btn-info nut" style={{ width: 130 }}>Learn</div></Link>
        </div>
    )

    rendernd3 = () => (
        <div className="hienthi1" id="nd3">
            <img src="Image/cd3_3.jpg" alt width="70%" height="370px" /> <br />
            <Link to="/chude3"><div className="btn btn-info nut" style={{ width: 130 }}>Learn</div></Link>
        </div>
    )


    check = () => {
        if (this.state.trangthai === 1) {
            return this.rendernd1();
        }
        else if (this.state.trangthai === 2) {
            return this.rendernd2();
        }
        else {
            return this.rendernd3();
        }
    }

    displayTheme = (id) => {
        if (id === 1) {
            this.setState({ trangthai: 1 });
        }
        else if (id === 2) {
            this.setState({ trangthai: 2 });
        }
        else {
            this.setState({ trangthai: 3 });
        }
    }


    render() {
        return (
            <section>
                <div className="chude">
                    <div className="chude1 hinh">
                        <a href="#" onClick={() => this.displayTheme(1)}>
                            <img src="Image/cd1.png" alt width="371px" height="136px" /></a>
                    </div>
                    <br />
                    <div className="chude2 hinh">
                        <a href="#" onClick={() => this.displayTheme(2)}>
                            <img src="Image/cd5.png" alt width="371px" height="136px" /></a>
                    </div>
                    <br />
                    <div className="chude3 hinh">
                        <a href="#" onClick={() => this.displayTheme(3)}>
                            <img src="Image/cd2.jpg" alt width="371px" height="136px" />
                        </a>
                    </div>
                    <br />
                </div>
                <div className="noidung" style={{ textAlign: 'center' }}>
                    {this.check()}
                </div>
            </section>
        );
    }
}

export default Theme;