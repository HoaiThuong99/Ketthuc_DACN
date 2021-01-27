import React, { Component } from 'react';
import User from '../components/service/User'
class BoardAdmin extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         content: ""
    //     };
    // }
    // componentDidMount() {
    //     User.getAdminBoard().then(
    //         response => {
    //             this.setState({
    //                 content: response.data
    //             });
    //         },
    //         error => {
    //             this.setState({
    //                 content:
    //                     (error.response &&
    //                         error.response.data &&
    //                         error.response.data.message) ||
    //                     error.message ||
    //                     error.toString()
    //             });
    //         }
    //     );
    // }
    render() {
        return (
            <>
                <div style={{ textAlign: "center" }}>
                    <img src="Image/Logo.gif" alt="" style={{ height: '200px' }} />
                </div>
                <div className="container" style={{ textAlign: "center", fontWeight: "bold", fontSize: "40px", color:"#e53030", marginTop:"100px" }}>
                    BoardAdmin
                </div>
            </>
        );
    }
}

export default BoardAdmin;