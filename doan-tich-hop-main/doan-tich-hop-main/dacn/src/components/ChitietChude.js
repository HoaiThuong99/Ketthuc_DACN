import React, { Component } from 'react';
import a from './image/A.jpg'
import b from './image/B.png'
import c from './image/C.png'
import d from './image/D.png'
import e from './image/E.png'
import f from './image/F.png'
import g from './image/G.png'
import h from './image/H.PNG'
import i from './image/I.PNG'
import j from './image/J.PNG'
import k from './image/K.PNG'
import l from './image/L.PNG'
import m from './image/M.PNG'
import n from './image/N.PNG'
import o from './image/O.PNG'
import p from './image/P.PNG'
import q from './image/Q.PNG'
import r from './image/R.PNG'
import s from './image/S.PNG'
import t from './image/T.PNG'
import u from './image/U.PNG'
import v from './image/V.PNG'
import w from './image/W.PNG'
import x from './image/X.PNG'
import y from './image/Y.PNG'
import z from './image/Z.PNG'
import back from './image/backbutton.png'
import { Link } from 'react-router-dom';

class ChitietChude extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            images: [{ url: a, code: "A" }, { url: b, code: "B" }, { url: c, code: "C" }, { url: d, code: "D" }, { url: e, code: "E" }, { url: f, code: "F" }, { url: g, code: "G" }, { url: h, code: "H" }, { url: i, code: "I" }, { url: j, code: "J" }, { url: k, code: "K" }, { url: l, code: "L" }, { url: m, code: "M" }, { url: n, code: "N" }, { url: o, code: "O" }, { url: p, code: "P" }, { url: q, code: "Q" }, { url: r, code: "R" }, { url: s, code: "S" }, { url: t, code: "T" }, { url: u, code: "U" }, { url: v, code: "V" }, { url: w, code: "W" }, { url: x, code: "X" }, { url: y, code: "Y" }, { url: z, code: "Z" }],
            url: ""
        }
    }
    toSpeak = (id) => {
        var msg = new SpeechSynthesisUtterance(id);
        window.speechSynthesis.speak(msg);
    }
    componentDidMount() {
        const chu = this.state.images.find(img => img.code === this.props.match.params.chu);
        if (chu) {
            this.setState({ url: chu.url })
            this.toSpeak(chu.code)
        }
    }
    render() {
        console.log(this.state.url);

        return (
            <div id="noidung">
                <Link to="/chude1">
                    <img src={back} alt="" style={{ width: '5%', left: 100 }} />
                </Link>
                <img src={this.state.url} onClick={() => this.componentDidMount()} alt="" style={{ borderRadius: '10%' }} width="600px" height="400px" />
                
            </div>

        );
    }
}

export default ChitietChude;