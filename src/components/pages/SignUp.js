import React, { Component, registerUser } from 'react';
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from 'axios';
import swal from 'sweetalert'

class SignUp extends Component {
    state = {
        fullname: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        Usertype: ""
    }

    registerUser = (e) => {
        e.preventDefault();
        const userData = {
            fullname: this.state.fullname,
            username: this.state.username,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password,
            Usertype: this.state.Usertype
        }
        console.log(userData)
        axios.post("http://localhost:90/account/insert", userData)
            .then((response) => {
                if (response.data.success == true) {
                    swal({
                        title: "Success",
                        text: "User Added",
                        icon: "success"
                    })
                    window.location.href = "/login"
                }

            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <>
                <Container>
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8 FormDesign">
                            <form method="post">
                                <p className="text-center">Jersey Nepal.</p>
                                <h1 className="text-center">Account Registration</h1>
                                <Form.Group controlId="formBasicFullName">
                                    <Form.Label>Full Name:</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Full Name" required name="fullname" value={this.state.fullname}
                                        onChange={(event) => { this.setState({ fullname: event.target.value }) }}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicUsername">
                                    <Form.Label>Username:</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Username" name="username" value={this.state.username}
                                        onChange={(event) => { this.setState({ username: event.target.value }) }}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address:</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Email" name="email" value={this.state.email}
                                        onChange={(event) => { this.setState({ email: event.target.value }) }}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicPhone">
                                    <Form.Label>Phone:</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Phone Number" name="phone" value={this.state.phone}
                                        onChange={(event) => { this.setState({ phone: event.target.value }) }}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="password" value={this.state.password}
                                        onChange={(event) => { this.setState({ password: event.target.value }) }}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicUsertype">
                                    <Form.Label>User Type:</Form.Label>
                                    <Form.Control type="text" placeholder="Enter User Type" name="Usertype" value={this.state.Usertype}
                                        onChange={(event) => { this.setState({ Usertype: event.target.value }) }}
                                    />
                                </Form.Group>

                                <button type="submit" className="btn btn-secondary btn-lg btn-block" onClick={this.registerUser}>REGISTER</button>
                                <p className="forgot-password text-center">
                                    <a href="#">Already have an account?</a>
                                </p>
                                <button type="submit" className="btn btn-dark btn-lg btn-block">LOGIN NOW!</button>
                            </form>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                </Container>
            </>
        )
    }
}

export default SignUp