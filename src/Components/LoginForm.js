import React, { useState } from 'react'
import './LoginForm.css';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
function LoginForm(props) {
    const [loginData, setLoginData] = useState(
        {
            userEmail: "",
            userPassword: ""
        }
    )
    const [passvisibility, setPassvisibility] = useState("password")
    const [eye, setEye] = useState(true)
    function eyeHandler(event) {
        event.preventDefault();
        if (eye) {
            setEye(false);
            setPassvisibility("text");
        } else {
            setEye(true);
            setPassvisibility("password");
        }
    }
    function loginFormHandler(event) {
        setLoginData(prevForm => {
            return {
                ...prevForm,
                [event.target.name]: event.target.value
            }
        });
    }
    return (
        <div>
            <label>
                <p>Email Address<sup>*</sup></p>
                <input className='form-input'
                    required
                    type="email"
                    name='email'
                    placeholder='Enter email address'
                    onChange={loginFormHandler}
                />
            </label>
            <label className='password-label'>
                <p>Password<sup>*</sup></p>
                <input className='form-input'
                    required
                    name='password'
                    type={passvisibility}
                    placeholder='Enter Password'
                    onChange={loginFormHandler}
                />
                
                <button onClick={eyeHandler} className='eyebtn'>
                    {eye ? <AiOutlineEye className='eye-ball' /> : <AiOutlineEyeInvisible className='eye-ball' />}
                </button>
                
            </label>
            <p><Link className='forgot-pass'>Forgot Password</Link></p>
        </div>
    )
}

export default LoginForm;