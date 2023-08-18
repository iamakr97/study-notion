import React from "react";
import './Login.css';
import Templates from './Templates';
import login from '../assets/login.png';
function Login(props) {
    let loggedin=props.loggedin;
    let setLoggedin=props.setLoggedin;
    return (
        <div>
            <Templates
                heading="Welcome Back"
                desc="Build skills for today, tomorrow, and beyond."
                span="Education to future-proof your career."
                btn1="Sign in"
                btn2="Sign in With Google"
                image={login}
                formtype="login"
                loggedin={loggedin}
                setLoggedin={setLoggedin}
            />
        </div>
    );
}
export default Login;