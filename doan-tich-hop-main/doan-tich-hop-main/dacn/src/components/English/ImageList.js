import React, {Component} from 'react';
// import mp3No from "../../../public/music/no.mp3"
var no = new Audio("");

class ImageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "",
            colorsYesPlay: ["green", "orange", "red", "pink", "purple", "yellow", "gray", "blue", "black", "brown"]
        }
    }

    playAudio = (color) => {
        var no = new Audio("/music/no.mp3");
        var yes = new Audio('/music/yes.mp3');
        var next = document.getElementById("next");
        var win = document.getElementById("win"); 
        var img1 = document.getElementById("img1");
        var brown = document.getElementById("brown");
        var again = document.getElementById("again");
        var exit = document.getElementById("exit");
        if (this.props.code === color) {
            yes.play();
            next.style.display = "block"
            for (let i = 0; i < this.state.colorsYesPlay.length; i++) {
                if(this.props.code === "brown"){
                    win.style.display = "block";
                    img1.style.display = "none"
                    next.style.display = "none"
                    brown.style.display = "none"
                    again.style.display = "block"
                    exit.style.display = "block"
                    break;
                }

                if (this.state.colorsYesPlay[i] === this.props.code) {
                    this.setState({url: `/home-english/${this.state.colorsYesPlay[++i]}`})
                }
               

            }

        } else {
            no.play();
        }
    }

    render() {

        return (
            <>
                <div id="img1" style={{textAlign: 'center', marginTop: "100px"}}>
                    <a onClick={() => this.playAudio("orange")}>
                        <img src="/image/cam.jpg" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick={() => this.playAudio("black")}>
                        <img src="/image/den.jpg" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick={() => this.playAudio("red")}>
                        <img src="/image/do.jpg" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick={() => this.playAudio("pink")}>
                        <img src="/image/hong.jpg" id="hong" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick={() => this.playAudio("brown")}>
                        <img src="/image/nau.png" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/><br/>
                    </a>
                    <a onClick={() => this.playAudio("purple")}>
                        <img src="/image/tim.webp" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick={() => this.playAudio("yellow")}>
                        <img src="/image/vang.jpg" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick={() => this.playAudio("blue")}>
                        <img src="/image/xanhd.jpg" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick={() => this.playAudio("green")}>
                        <img src="/image/xanhl.png" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                    <a onClick={() => this.playAudio("gray")}>
                        <img src="/image/xám.jpg" width="100px" height="100px "
                             style={{borderRadius: '50%', marginRight: 50, marginBottom: 50}}/>
                    </a>
                </div>
                <a href={this.state.url}>
                    <button id="next" style={{
                        backgroundColor: '#e53030',
                        display: 'none',
                        borderRadius: 10,
                        width: 80,
                        height: 40,
                        marginLeft: 1100
                    }}>NEXT
                    </button>
                </a>
            </>
        );
    }
}

export default ImageList;