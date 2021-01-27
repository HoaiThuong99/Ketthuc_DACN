import React, {Component} from 'react';

class Answer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrNext: ["one", "six", "five", "two", "three", "nine", "four", "seven", "eight"],
            url: ""

        }
    }

    displayButton = () => {
        const next = document.getElementById("next");
        const win = document.getElementsByClassName("win");
        var again = document.getElementById("again");
        var exit = document.getElementById("exit");
        next.style.display = "block";
        for (let i = 0; i < this.state.arrNext.length; i++) {
            if (this.props.answer.code === this.state.arrNext[i]) {
                if (i === this.state.arrNext.length - 1) {
                    win[0].style.display = "block";
                    this.props.isWin();
                    again.style.display = "block"
                    exit.style.display = "block"
                    break;
                } else {
                    this.setState({
                        url: `/home-number/${this.state.arrNext[++i]}`
                    })
                }

            }

        }
    };


    displayElement = () => {
        var yes = new Audio('/music/yes.mp3');
        switch (this.props.answer.ans) {
            case 1:
                return (
                    <>
                        <a onClick={() => {
                            yes.play();
                            this.displayButton();
                        }}>
                            <img src={this.props.answer.img1} className="hinh81" width="100px" height="100px "
                                 style={{marginRight: 50, marginBottom: 50, marginTop: 200}}/>
                        </a>

                        <a>
                            <img src={this.props.answer.img2} className="hinh82" width="100px" height="100px "
                                 style={{marginRight: 50, marginBottom: 50, marginTop: 200}}/>
                        </a>

                        <a>
                            <img src={this.props.answer.img3} className="hinh84" width="100px" height="100px "
                                 style={{marginRight: 50, marginBottom: 50, marginTop: 200}}/>
                        </a>

                        <a>
                            <img src={this.props.answer.img4} className="hinh83" width="100px" height="100px "
                                 style={{marginRight: 50, marginBottom: 50, marginTop: 200}}/>
                        </a>
                    </>
                )
            case 2:
                return (
                    <>
                        <a>
                            <img src={this.props.answer.img1} className="hinh81" width="100px" height="100px "
                                 style={{marginRight: 50, marginBottom: 50, marginTop: 200}}/>
                        </a>

                        <a onClick={() => {
                            yes.play();
                            this.displayButton();
                        }}>
                            <img src={this.props.answer.img2} className="hinh82" width="100px" height="100px "
                                 style={{marginRight: 50, marginBottom: 50, marginTop: 200}}/>
                        </a>

                        <a>
                            <img src={this.props.answer.img3} className="hinh84" width="100px" height="100px "
                                 style={{marginRight: 50, marginBottom: 50, marginTop: 200}}/>
                        </a>

                        <a>
                            <img src={this.props.answer.img4} className="hinh83" width="100px" height="100px "
                                 style={{marginRight: 50, marginBottom: 50, marginTop: 200}}/>
                        </a>
                    </>
                )
            case 3:
                return (
                    <>
                        <a>
                            <img src={this.props.answer.img1} className="hinh81" width="100px" height="100px "
                                 style={{marginRight: 50, marginBottom: 50, marginTop: '200px'}}/>
                        </a>

                        <a>
                            <img src={this.props.answer.img2} className="hinh82" width="100px" height="100px "
                                 style={{marginRight: 50, marginBottom: 50, marginTop: '200px'}}/>
                        </a>

                        <a onClick={() => {
                            yes.play();
                            this.displayButton();
                        }}>
                            <img src={this.props.answer.img3} className="hinh84" width="100px" height="100px "
                                 style={{marginRight: 50, marginBottom: 50, marginTop: '200px'}}/>
                        </a>

                        <a>
                            <img src={this.props.answer.img4} className="hinh83" width="100px" height="100px "
                                 style={{marginRight: 50, marginBottom: 50, marginTop: '200px'}}/>
                        </a>
                    </>
                )
            default:
                return (
                    <>
                        <a>
                            <img src={this.props.answer.img1} className="hinh81" width="100px" height="100px "
                                 style={{marginRight: 50, marginBottom: 50, marginTop: '200px'}}/>
                        </a>

                        <a>
                            <img src={this.props.answer.img2} className="hinh82" width="100px" height="100px "
                                 style={{marginRight: 50, marginBottom: 50, marginTop: '200px'}}/>
                        </a>

                        <a>
                            <img src={this.props.answer.img3} className="hinh84" width="100px" height="100px "
                                 style={{marginRight: 50, marginBottom: 50, marginTop: '200px'}}/>
                        </a>

                        <a onClick={() => {
                            yes.play();
                            this.displayButton();
                        }}>
                            <img src={this.props.answer.img4} className="hinh83" width="100px" height="100px "
                                 style={{marginRight: 50, marginBottom: 50, marginTop: '200px'}}/>
                        </a>
                    </>
                )
        }
    }


    render() {

        return (
            <>
                <div className="img9" style={{textAlign: 'center'}}>
                    {this.displayElement()}
                </div>
                <a href={this.state.url}>
                    <button id="next" style={{
                        backgroundColor: 'rgb(47, 248, 255)',
                        display: 'none',
                        borderRadius: 10,
                        width: 100,
                        height: 50,
                        marginLeft: 800
                    }}>NEXT
                    </button>
                </a>
            </>
        );
    }
}

export default Answer;