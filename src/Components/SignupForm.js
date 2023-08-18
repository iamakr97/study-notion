import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import './SignupForm.css';
function SignupForm() {

    const [passvisibility1, setPassvisibility1] = useState("password")
    const [passvisibility2, setPassvisibility2] = useState("password")
    const [eye1, setEye1] = useState(true)
    const [eye2, setEye2] = useState(true)
    function eyeHandler1(event) {
        event.preventDefault();
        if (eye1) {
            setEye1(false);
            setPassvisibility1("text");
        } else {
            setEye1(true);
            setPassvisibility1("password");
        }
    }
    function eyeHandler2(event) {
        event.preventDefault();
        if (eye2) {
            setEye2(false);
            setPassvisibility2("text");
        } else {
            setEye2(true);
            setPassvisibility2("password");
        }
    }
    const [active1, setActive1]=useState("student active");
    const [active2, setActive2]=useState("student");
    function clickHandler1(event){
        event.preventDefault();
        setActive2("student");
        setActive1("student active");
    }
    function clickHandler2(event){
        event.preventDefault();
        setActive1("student");
        setActive2("student active");
    }
    return (
        <div>
            <div className='stu-inst'>
                <button className={active1} onClick={clickHandler1}>Student</button>
                <button className={active2} onClick={clickHandler2}>Instructor</button>
            </div>
            <div className="name-container">
                <div className="name-section">
                    <label>
                        <p>First Name<sup>*</sup></p>
                        <input
                            type="text"
                            placeholder='Enter First Name'
                            className='form-input name-input'
                        />
                    </label>
                    <label>
                        <p>Last Name<sup>*</sup></p>
                        <input
                            type="text"
                            placeholder='Enter Last Name'
                            className='form-input name-input'
                        />
                    </label>
                </div>
            </div>
            <label>
                <p>Email Address<sup>*</sup></p>
                <input className='form-input'
                    required
                    type="email"
                    placeholder='Enter email address'
                />
            </label>
            <label className='password-label'>
                <p>Create Password<sup>*</sup></p>
                <input className='form-input'
                    required
                    name='password'
                    type={passvisibility1}
                    placeholder='Enter Password'
                />

                <button onClick={eyeHandler1} className='eyebtn'>
                    {eye1 ? <AiOutlineEye className='eye-ball' /> : <AiOutlineEyeInvisible className='eye-ball' />}
                </button>

            </label>
            <label className='password-label'>
                <p>Confirm Password<sup>*</sup></p>
                <input className='form-input'
                    required
                    name='password'
                    type={passvisibility2}
                    placeholder='Confirm Password'
                />

                <button onClick={eyeHandler2} className='eyebtn'>
                    {eye2 ? <AiOutlineEye className='eye-ball' /> : <AiOutlineEyeInvisible className='eye-ball' />}
                </button>

            </label>



        </div>
    )
}

export default SignupForm;