import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Theme from "./components/Theme";
import HomeThem from "./components/HomeThem"
import Chude1 from './components/Chude1';
import Chude3 from './components/Chude3';
import ChitietChude from './components/ChitietChude';
import ChitietChude3 from './components/ChitietChude3';
import chude2 from './components/chude2';
import ChitietChude2 from './components/ChitietChude2';
import Register from './components/Register';
import BoardAdmin from './components/BoardAdmin'
import HomeEnglish from "./components/English/HomeEnglish";
import FlipFlop1 from './components/FlipFlop1';
import HomeNumber from './components/Number/HomeNumber';

class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.logOut = this.logOut.bind(this);

    //     this.state = {
    //         showAdminBoard: false,
    //         currentUser: undefined,
    //     };
    // }

    // componentDidMount() {
    //     const user = Auth.getCurrentUser();
    //     if (user) {
    //         this.setState({
    //             currentUser: user,
    //             showAdminBoard: user.roles.includes("ROLE_ADMIN"),
    //         });
    //     }
    // }

    // logOut() {
    //     Auth.logout();
    // }

    render() {
        // const { currentUser, showAdminBoard } = this.state;
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Route exact path="/home-english">
                        <Redirect to="/home-english/green" />
                    </Route>
                    <Route exact path="/home-number">
                        <Redirect to="/home-number/one" />
                    </Route>
                    <Route component={HomeEnglish} path="/home-english/:color" exact />
                    <Route component={ChitietChude} path="/chude1/:chu" exact />
                    <Route component={ChitietChude2} path="/chude2/:chu" exact />
                    <Route component={ChitietChude3} path="/chude3/:chu" exact />
                    <Route component={Home} path="/home" exact />
                    <Route component={Login} path="/login" exact />
                    <Route component={Register} path="/register" exact />
                    <Route component={HomeThem} path="/home-theme" exact />
                    <Route component={Chude1} path="/chude1" exact />
                    <Route component={chude2} path="/chude2" exact />
                    <Route component={Chude3} path="/chude3" exact />
                    <Route component={FlipFlop1} path="/flipflop" exact />
                    <Route component={HomeNumber} path="/home-number/:number" exact />
                    <Route path="/admin" component={BoardAdmin} />
                </Switch>
            </BrowserRouter>
        )
    }
}


export default App;
