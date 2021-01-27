import React, { Component } from 'react';
import ImageList from "./ImageList";
import Alphabet from "./Alphabet";
import "./1.css"
import { Link } from 'react-router-dom';
class HomeEnglish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ["orange", "black", "red", "pink", "brown", "purple", "yellow", "blue", "green", "gray"],
            color: ""
        }
    }
    toSpeak = (id) => {
        var msg = new SpeechSynthesisUtterance(id);
        window.speechSynthesis.speak(msg);
    }
    componentDidMount() {
        const presentColor = this.state.colors.find(color => color === this.props.match.params.color);
        if (presentColor) {
            this.setState({
                color: presentColor
            })
            this.toSpeak(presentColor)
        }
        else {
            this.props.history.push("/home-english/green")
        }
    }

    again = () => {
        this.props.history.push("/home-english/green");
        window.location.reload();
    }
    exit = () => {
        this.props.history.push("/chude3");
        window.location.reload();
    }
    render() {
        return (
            <div id="english">
                <div>
                    <h1 className="game-title"><Link to="/chude3">
                        <img src="/Image/backbutton.png" alt="" style={{ width: '4%', marginRight: '100px' }} />
                    </Link>Play-Game</h1>
                </div>
                <div>
                    <h1 id="win" style={{ display: 'none', marginTop: 100 }}>YOU  ARE  WINER</h1>
                </div>
                <a id="again" onClick={() => this.again()} style={{ display: 'none', marginTop: 50, cursor: 'pointer' }}>Again</a>
                <a id="exit" onClick={() => this.exit()} style={{ display: 'none', marginTop: 50, cursor: 'pointer' }}>Exit</a>
                <ImageList
                    code={this.state.color}
                />
                <Alphabet
                    code={this.state.color}
                />
            </div>
        );
    }
}

export default HomeEnglish;