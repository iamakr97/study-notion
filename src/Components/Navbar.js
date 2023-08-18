import './Navbar.css';
import React from 'react';
import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
function Navbar(props) {
    let loggedin = props.loggedin;
    let setLoggedin = props.setLoggedin;
    function logoutHandler(){
        setLoggedin(!loggedin);
        toast.success("Logout Sucessfully");
    }
    return (
        <div className='nav-container'>
            <Link to="/"><img src={Logo} className='logoimage' /></Link>
            <nav className='nav-items'>
                <ul>
                    <li><Link to="/" className='navlinks'>Home</Link></li>
                    <li><Link to="/about" className='navlinks'>About</Link></li>
                    <li><Link to="/contact" className='navlinks'>Contact</Link></li>
                </ul>
            </nav>
            <div>
                {!loggedin &&
                    <Link to="/login">
                        <button className='log-btn'>Log in</button>
                    </Link>
                }
                {!loggedin &&
                    <Link to="/signup">
                        <button className='log-btn'>Sign Up</button>
                    </Link>
                }
                {loggedin &&
                    <Link to="/">
                        <button className='log-btn' onClick={logoutHandler}>Log out</button>
                    </Link>
                }
                {loggedin &&
                    <Link to="/dashboard">
                        <button className='log-btn'>Dashboard</button>
                    </Link>
                }
            </div>
        </div>
    );
}
export default Navbar;