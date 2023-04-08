import React, { useState } from 'react';
import SignupForm from './SignUp';
import LoginForm from './LogIn';

function LoginSignupPage() {
    const [formType, setFormType] = useState('login');

    const handleFormTypeChange = () => {
        if (formType === 'login') setFormType('signup');
        else setFormType('login');
    }

    return (
        <div>
            {formType === 'login' &&
                <LoginForm handleFormTypeChange={handleFormTypeChange} />}

            {formType === 'signup' &&
                <SignupForm handleFormTypeChange={handleFormTypeChange} />}
        </div>
    )
}

export default LoginSignupPage