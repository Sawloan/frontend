import React,{useState,useEffect} from 'react'
import {Container} from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert'
import { Link } from 'react-router-dom';

const SignIn = (props) => {
    let [credentials,setCredentials] = useState({
        "username":"",
        "password":""
    })

    const changeHandler = (e)=>{
        var {name,value} = e.target;
        setCredentials(
            {
                ...credentials,[name]:value
            }
        )
        
    }

    const loginUser = (e)=>{
        e.preventDefault();
        
        axios.post("http://localhost:90/account/login",credentials)
        .then((response)=>{
            if(response.data.success == true)
            {
                localStorage.setItem("token",response.data.token);
                localStorage.setItem("user",JSON.stringify(response.data.data));
                swal({
                    "title":"Success",
                    "text":response.data.message,
                    "icon":"success"
                })
                window.location.href = "/"
            }
            else
            {
                swal({
                    "title":"Error",
                    "text":response.data.message,
                    "icon":"error"
                })
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <React.Fragment>
             <>
            <Container>
                <div className="row">
                    <div className="col-lg-3">
                    </div>
                    <div className="col-lg-6 FormDesign">
                    <form method="submit" onSubmit={loginUser}>
                        <p className="text-center">Enter The World Of Jersey.</p>
                        <h1>Log in</h1>

                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" name="username" value={credentials.accUN} onChange={(event)=>{changeHandler(event)}}  placeholder="Enter username" />
                        </div>

                        <div className="form-group">
                            <label>Password</label> 
                            <input type="password" className="form-control" name="password" value={credentials.accPwd} onChange={(event)=>{changeHandler(event)}} placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-secondary btn-lg btn-block">LOG IN</button>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                        <p className="forgot-password text-center">
                            <a href="#">Don't have an account yet?</a>
                        </p>
                        <Link type="submit" className="btn btn-dark btn-md btn-block" to='/register'>REGISTER NOW!</Link>
                    </form>
                    </div>
                    <div className="col-lg-3"></div>
            </div>
            </Container>
            </>
        </React.Fragment>
    )
}

export default SignIn

