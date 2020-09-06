import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.util';

import './signin.style.scss';

export default class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        console.log('Hndle submit called');
        try {
            auth.signInWithEmailAndPassword(email, password).then( usercred => {
                this.setState({ email: '', password: '' }, () => {
                    // Handle using Redirect in App.js
                    // this.props.history.push('/');
                });
            })
        } catch (e) {
            console.log('error ', e);
        }
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" required value={this.state.email} handleChange={this.handleChange} label="Email" />
                    <FormInput name="password" type="password" required value={this.state.password} handleChange={this.handleChange} label="Password" />
                    <div className="container">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}> Sign in with Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
