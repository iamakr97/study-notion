import React from "react";
import Templates from './Templates';
import signup from '../assets/signup.png';
import './Signup.css';
function Signup(props) {
    let loggedin=props.loggedin;
    let setLoggedin=props.setLoggedin;
    return (
        <div>
            <Templates
                heading="Join the millions learning to code with StudyNotion for free"
                desc="Build skills for today, tomorrow, and beyond."
                span="Education to future-proof your career."
                btn1="Sign Up"
                btn2="Sign Up With Google"
                image={signup}
                formtype="signup"
                loggedin={loggedin}
                setLoggedin={setLoggedin}
            />
        </div>
    );
}
export default Signup;