import React, { Component } from 'react';
import one from './image/1.jpg'
import two from './image/2.jpg'
import three from './image/3.jpg'
import four from './image/4.jpg'
import five from './image/5.jpg'
import six from './image/6.jpg'
import seven from './image/7.jpg'
import eight from './image/8.jpg'
import nine from './image/9.jpg'
import zero from './image/0.jpg'
import back from './image/backbutton.png'
import { Link } from 'react-router-dom';
class ChitietChude2 extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            images: [{ url: one, code: "1" }, { url: two, code: "2" }, { url: three, code: "3" }, { url: four, code: "4" }, { url: five, code: "5" }, { url: six, code: "6" }, { url: seven, code: "7" }, { url: eight, code: "8" }, { url: nine, code: "9" }, { url: zero, code: "0" }],
            url: ""
        }
    }
    toSpeak = (id) => {
        var msg = new SpeechSynthesisUtterance(id);
        window.speechSynthesis.speak(msg);
    }
    componentDidMount() {
        const chu = this.state.images.find(img => img.code === this.props.match.params.chu);
        console.log(chu);
        
        if (chu) {
            this.setState({ url: chu.url })
            this.toSpeak(chu.code)
        }
    }
    render() {
        return (
            <div id="noidung">
                <Link to="/chude2">
                    <img src={back} alt="" style={{ width: '5%', left: 100 }} />
                </Link>
                <img src={this.state.url} onClick={() => this.componentDidMount()} alt="" style={{ borderRadius: '10%'}} width="600px" height="400px"/>
            </div>
        );
    }
}

export default ChitietChude2;