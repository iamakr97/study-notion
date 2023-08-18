import React, { useState } from 'react';
import './Templates.css';
import SignupForm from './SignupForm.js';
import LoginForm from './LoginForm.js';
import frame from '../assets/frame.png';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Templates({ heading, desc, span, btn1, btn2, image, formtype, loggedin, setLoggedin }) {
    const navigate = useNavigate();
    function formHandler(event) {
        event.preventDefault();
        navigate("/dashboard");
        toast.success("Logged in");
        setLoggedin(!loggedin);
    }
    return (
        <form className='template-container' onSubmit={formHandler} >
            <div className="left-section">
                <h2 className='form-heading'>{heading}</h2>
                <p className='form-desc'>
                    {desc}
                    <span> {span}</span>
                </p>
                {
                    formtype === "login" ?
                        (<LoginForm />) :
                        (<SignupForm />)
                }
                <button className='btn btn1'>{btn1}</button>
                <div className='line-container'>
                    <div className='line'></div>
                    <p>OR</p>
                    <div className='line'></div>
                </div>
                <button className='btn btn2'><FcGoogle id='google-icon' /> {btn2}</button>
            </div>
            <div className="right-section">
                <img src={frame} className="bg" />
                <img src={image} className="pic" />
            </div>
        </form>
    )
}
export default Templates;
