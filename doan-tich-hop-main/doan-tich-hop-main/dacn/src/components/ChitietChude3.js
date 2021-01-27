import React, { Component } from 'react';
import red from './image/red.jpg'
import blue from './image/blue.jpg'
import purple from './image/purple.jpg'
import orange from './image/orange.jpg'
import black from './image/black.jpg'
import white from './image/white.jpg'
import green from './image/green.jpg'
import yellow from './image/yellow.jpg'
import brown from './image/brown.jpg'
import pink from './image/pink.jpg'
import back from './image/backbutton.png'
import { Link } from 'react-router-dom';
class ChitietChude3 extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            images: [{ url: red, code: "red" }, { url: blue, code: "blue" }, { url: purple, code: "purple" }, { url: orange, code: "orange" }, { url: black, code: "black" }, { url: white, code: "white" }, { url: green, code: "green" }, { url: yellow, code: "yellow" }, { url: brown, code: "brown" }, { url: pink, code: "pink" }],
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
                <Link to="/chude3">
                    <img src={back} alt="" style={{ width: '5%', left: 100 }} />
                </Link>
                <img src={this.state.url} onClick={() => this.componentDidMount()} alt="" style={{ borderRadius: '10%' }} width="600px" height="400px" />
            </div>
        );
    }
}

export default ChitietChude3;