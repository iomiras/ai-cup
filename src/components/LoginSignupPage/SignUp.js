import React, { useState } from 'react';

function SignupForm(props) {
    const [website, setWebsite] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [websiteCategory, setWebsiteCategory] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Form submitted');
        console.log('Website:', website);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm password:', confirmPassword);
        console.log('Website category:', websiteCategory);

        // Send POST request to register the user
        fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                website: website,
                website_category: websiteCategory
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                localStorage.setItem('bearerToken', data.bearer_token);
            })
            .catch(error => console.error(error));
    };

    return (
        <form className='w-50' onSubmit={handleSubmit}>
            <h3 className='mb-3'>Sign Up</h3>
            <div className="mb-3">
                <label htmlFor="website" className="form-label">Website</label>
                <input
                    type="text"
                    className="form-control"
                    id="website"
                    value={website}
                    onChange={(event) => setWebsite(event.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="websiteCategory" className="form-label">Website Category</label>
                <select
                    className="form-control"
                    id="websiteCategory"
                    value={websiteCategory}
                    onChange={(event) => setWebsiteCategory(event.target.value)}
                >
                    <option value="">Select an option</option>
                    <option value="e-commerce">E-commerce</option>
                    <option value="blog">Blog</option>
                    <option value="portfolio">Portfolio</option>
                </select>
            </div>
            <div className='row'>
                <button type="submit" className="btn btn-primary">Submit</button>
                <p className='mt-3'>Already have an account? <a href="#" onClick={props.handleFormTypeChange}>Log in</a></p>
            </div>
        </form>
    );
}

export default SignupForm;