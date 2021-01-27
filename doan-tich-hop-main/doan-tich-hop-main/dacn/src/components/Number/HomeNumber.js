import React, { Component } from 'react';
import "./2.css"
import Question from "./Question";
import Answer from "./Answer";
import { Link } from 'react-router-dom';
class HomeNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
            number: "",
            answers: [
                {
                    "img1": "/Images/1.png",
                    "img2": "/Images/3.jpg",
                    "img3": "/Images/8.jpg",
                    "img4": "/Images/4.jpg",
                    code: "one",
                    ans: 1
                },
                {
                    "img1": "/Images/1.png",
                    "img2": "/Images/2.jpg",
                    "img3": "/Images/6.jpg",
                    "img4": "/Images/9.jpg",
                    code: "six",
                    ans: 3
                },
                {
                    "img1": "/Images/7.jpg",
                    "img2": "/Images/2.jpg",
                    "img3": "/Images/5.jpg",
                    "img4": "/Images/9.jpg",
                    code: "five",
                    ans: 3
                },
                {
                    "img1": "/Images/3.jpg",
                    "img2": "/Images/4.jpg",
                    "img3": "/Images/9.jpg",
                    "img4": "/Images/2.jpg",
                    code: "two",
                    ans: 4
                },
                {
                    "img1": "/Images/8.jpg",
                    "img2": "/Images/3.jpg",
                    "img3": "/Images/5.jpg",
                    "img4": "/Images/9.jpg",
                    code: "three",
                    ans: 2
                },
                {
                    "img1": "/Images/2.jpg",
                    "img2": "/Images/9.jpg",
                    "img3": "/Images/5.jpg",
                    "img4": "/Images/7.jpg",
                    code: "nine",
                    ans: 2
                },
                {
                    "img1": "/Images/2.jpg",
                    "img2": "/Images/6.jpg",
                    "img3": "/Images/4.jpg",
                    "img4": "/Images/9.jpg",
                    code: "four",
                    ans: 3
                },
                {
                    "img1": "/Images/4.jpg",
                    "img2": "/Images/3.jpg",
                    "img3": "/Images/9.jpg",
                    "img4": "/Images/7.jpg",
                    code: "seven",
                    ans: 4
                },
                {
                    "img1": "/Images/4.jpg",
                    "img2": "/Images/3.jpg",
                    "img3": "/Images/9.jpg",
                    "img4": "/Images/8.jpg",
                    code: "eight",
                    ans: 4
                },
            ],
            answer: {},
            isWin: false
        }
    }
    toSpeak = (id) => {
        var msg = new SpeechSynthesisUtterance(id);
        window.speechSynthesis.speak(msg);
    }
    componentDidMount() {
        const presentNumber = this.state.numbers.find(number => number === this.props.match.params.number);
        console.log(presentNumber);
        if (presentNumber) {
            this.setState({
                number: presentNumber
            })
            this.toSpeak(presentNumber)
        } else {
            this.props.history.push("/home-number/one")
        }

        const checkAnswer = this.state.answers.find(answer => answer.code === this.props.match.params.number);
        if (checkAnswer) {
            this.setState({
                answer: checkAnswer
            })
        }
    }

    again = () => {
        this.props.history.push("/home-number/one");
        window.location.reload();
    }
    exit = () => {
        this.props.history.push("/chude2");
        window.location.reload();
    }

    win = () => {
        this.setState({ isWin: true })
    }

    render() {
        return (
            <div id="numberplay">
                <div>
                    <h1 className="game-title"><Link to="/chude3">
                        <img src="/Image/backbutton.png" alt="" style={{ width: '4%', marginRight: '100px' }} />
                    </Link>Play-Game</h1>
                </div>
                <div>
                    <h1 className="win" style={{ display: 'none', marginTop: '50px' }}>YOU ARE WINER</h1>
                </div>
                <a id="again" onClick={() => this.again()}
                    style={{ display: 'none', marginTop: 50, cursor: 'pointer' }}>Again</a>
                <a id="exit" onClick={() => this.exit()}
                    style={{ display: 'none', marginTop: 50, cursor: 'pointer' }}>Exit</a>

                {
                    !this.state.isWin && (
                        <Question
                            code={this.state.number}
                        />
                    )
                }
                {
                    !this.state.isWin && (
                        <Answer
                            answer={this.state.answer}
                            isWin={() => this.win()}
                        />
                    )
                }
            </div>
        );
    }
}

export default HomeNumber;