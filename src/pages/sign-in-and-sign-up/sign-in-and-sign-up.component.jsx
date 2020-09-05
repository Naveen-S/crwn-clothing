import React from 'react'
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup';
import './sign-in-and-sign-up.style.scss';

export default function SignInSignUpPage(props) {
    return (
        <div>
            SIGNIN SIGNUP
            <div className="sign-container">
                <SignIn {...props}/>
                <SignUp {...props}/>
            </div>
        </div>
        
    )
}
