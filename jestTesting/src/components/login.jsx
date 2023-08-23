import React from 'react';
import './login.css'; // Import the CSS file

export default function Login() {
    return (
        <div className='container'>
            <form>
                <input type='text' placeholder='username' />
                <input type='password' placeholder='password' />
                <button>Login</button>
            </form>
        </div>
    );
}
