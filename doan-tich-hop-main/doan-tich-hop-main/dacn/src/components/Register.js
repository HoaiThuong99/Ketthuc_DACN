import React, { Component } from 'react';
import Form from "react-validation/build/form";
import swal from 'sweetalert';
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Auth from "./service/Auth"
import { v4 as uuidv4 } from 'uuid';
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

const vusername = value => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger tbao" role="alert">
                Tên đăng nhập từ 3 - 20 kí tự
            </div>
        );
    }
};

const vpassword = value => {
    if (value.length < 6 || value.length > 10) {
        return (
            <div className="alert alert-danger tbao" role="alert">
                Mật khẩu nhập từ 6 - 10 kí tự
            </div>
        );
    }
};
class Register extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            email: "",
            password: "",
            successful: false,
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

    handleRegister(e) {
        e.preventDefault();

        this.setState({
            message: "",
            successful: false
        });

        this.form.validateAll();
        const email = uuidv4();
        if (this.checkBtn.context._errors.length === 0) {
            Auth.register(
                this.state.username,
                email,
                this.state.password
            ).then(
                response => {
                    swal({
                        title: "Đăng nhập thành công",
                        icon: "success",
                    }).then(() => {
                        this.props.history.push("/login");
                        window.location.reload();

                    })
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    if (resMessage === "Error: Username is already taken!") {
                        swal({
                            title: "Trùng tên đăng nhập",
                            icon: "error",
                        })
                    }
                }
            );
        }
    }
    render() {
        return (
            <>
                <div style={{ textAlign: "center" }}>
                    <img src="Image/Logo.gif" alt="" />
                </div>
                <Form className="formlogin"
                    onSubmit={this.handleRegister}
                    ref={c => {
                        this.form = c;
                    }}
                >
                    {!this.state.successful && (
                        <div>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <Input
                                    type="text"
                                    className="text"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}
                                    validations={[required, vusername]}
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
                                    validations={[required, vpassword]}
                                />
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary btn-block nut">Sign Up</button>
                            </div>
                        </div>
                    )}
                    <CheckButton
                        style={{ display: "none" }}
                        ref={c => {
                            this.checkBtn = c;
                        }}
                    />
                </Form>
                <div>
                    <Link to="/home">
                        <img src="Image/backbutton.png" style={{ width: '5%', marginLeft:'300px' }} />
                    </Link>
                </div>
            </>
        );
    }
}

export default Register;