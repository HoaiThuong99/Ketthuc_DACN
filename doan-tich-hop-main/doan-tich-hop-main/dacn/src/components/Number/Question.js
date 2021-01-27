import React, {Component} from 'react';

class Question extends Component {

    toSpeak = (id) => {
        var msg = new SpeechSynthesisUtterance(id);
        window.speechSynthesis.speak(msg);
    }
    displayElement = () => {
        switch (this.props.code) {
            case "one":
                return (
                    <a onClick={() => this.toSpeak("one")}>
                        <img className="h1" src="/Images/one.JPG" alt="" style={{marginTop: '50px', marginLeft:'10px'}}/>
                    </a>
                )
            case "six":
                return (
                    <a onClick={() => this.toSpeak("six")}>
                        <img className="h2" src="/Images/six.JPG" alt="" style={{marginTop: '50px', marginLeft:'10px'}}/>
                    </a>
                )
            case "five":
                return (
                    <a onClick={() => this.toSpeak("five")}>
                        <img className="h3" src="/Images/five.JPG" alt="" style={{marginTop: '50px', marginLeft:'10px'}}/>
                    </a>
                )
            case "two":
                return (
                    <a onClick={() => this.toSpeak("two")}>
                        <img className="h4" src="/Images/two.JPG" alt="" style={{marginTop: '50px', marginLeft:'10px'}}/>
                    </a>
                )
            case "three":
                return (
                    <a onClick={() => this.toSpeak("three")}>
                        <img className="h5" src="/Images/three.JPG" alt="" style={{marginTop: '50px', marginLeft:'10px'}}/>
                    </a>
                )
            case "nine":
                return (
                    <a onClick={() => this.toSpeak("nine")}>
                        <img className="h6" src="/Images/nine.JPG" alt="" style={{marginTop: '50px', marginLeft:'10px'}}/>
                    </a>
                )
            case "four":
                return (
                    <a onClick={() => this.toSpeak("four")}>
                        <img className="h7" src="/Images/four.JPG" alt="" style={{marginTop: '50px', marginLeft:'10px'}}/>
                    </a>
                )
            case "seven":
                return (
                    <a onClick={() => this.toSpeak("seven")}>
                        <img className="h8" src="/Images/seven.JPG" alt="" style={{marginTop: '50px', marginLeft:'10px'}}/>
                    </a>
                )
            case "eight":
                return (
                    <a onClick={() => this.toSpeak("eight")}>
                        <img className="h9" src="/Images/eight.JPG" alt="" style={{marginTop: '50px', marginLeft:'10px'}}/>
                    </a>
                )
        }
    }

    render() {
        return (
            <div className="number">
                {this.displayElement()}
            </div>
        );
    }
}

export default Question;