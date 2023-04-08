import React, { useState } from 'react';

function SignupForm() {
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
    };

    return (
        <div>
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
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default SignupForm;
