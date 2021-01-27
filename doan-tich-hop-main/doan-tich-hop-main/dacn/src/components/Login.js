import React, { Component } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Auth from "../components/service/Auth";
import { Link } from 'react-router-dom';
const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger tbao" role="alert">
                Bắt buộc
            </div>
        );
    }
};


class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false,
            message: ""
        };
    }
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            message: "",
            loading: true
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            Auth.login(this.state.username, this.state.password).then(
                () => {
                    this.props.history.push("/home-theme");
                    window.location.reload();
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    if (resMessage === "Request failed with status code 401") {
                        this.setState({
                            loading: false,
                            message: "Sai tên đăng nhập hoặc mật khẩu"
                        });
                    }

                }
            );
        } else {
            this.setState({
                loading: false
            });
        }
    }
    render() {
        return (
            <>
                <div style={{ textAlign: "center" }}>
                    <img src="Image/Logo.gif" alt="" style={{ height: '200px' }} />
                </div>
                <Form className="formlogin" onSubmit={this.handleLogin} ref={c => { this.form = c; }}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <Input
                            type="text"
                            className="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            validations={[required]}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Input
                            type="password"
                            className="text"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            validations={[required]}
                        />
                    </div>

                    <div className="form-group">
                        <button
                            className="btn btn-primary btn-block nut"
                            disabled={this.state.loading}
                        >
                            {this.state.loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>Sign In</span>
                        </button>
                    </div>

                    {this.state.message && (
                        <div className="form-group tbao">
                            <div className="alert alert-danger" role="alert">
                                {this.state.message}
                            </div>
                        </div>
                    )}
                    <CheckButton
                        style={{ display: "none" }}
                        ref={c => {
                            this.checkBtn = c;
                        }}
                    />
                    <Link to="/register" style={{ color: '#e53030' }}>
                        Không có tài khoản đăng kí tại đây
                    </Link>
                </Form>
                <div>
                    <Link to="/home">
                        <img src="Image/backbutton.png" alt="" style={{ width: '5%', marginLeft:'300px' }} />
                    </Link>
                </div>
            </>
        );
    }
}

export default Login;