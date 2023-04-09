import React, { useState } from 'react';

function LoginForm(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted');
        console.log('Email:', email);
        console.log('Password:', password);

        fetch('http://127.0.0.1:8000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                localStorage.setItem('bearerToken', data.token);
            })
            .catch(error => console.error(error));
    };

    return (
        <form className='w-50' onSubmit={handleSubmit}>
            <h3 className='mb-3'>Log In</h3>
            <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                    Email address
                </label>
                <input
                    type='email'
                    className='form-control'
                    id='email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='password' className='form-label'>
                    Password
                </label>
                <input
                    type='password'
                    className='form-control'
                    id='password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <div className='row'>
                <button type='submit' className='btn btn-primary'>
                    Submit
                </button>
                <p className='mt-3'>
                    Don't have an account? <a href='#' onClick={props.handleFormTypeChange}>Sign up</a>
                </p>
            </div>
        </form>
    );
}

export default LoginForm;
