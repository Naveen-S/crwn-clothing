import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.util";
import "./signup.scss";

export default class signup extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  onHandleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const { email, displayName, password, confirmPassword } = this.state;
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password don't match");
    }

    auth.createUserWithEmailAndPassword(email, password).then(({ user }) => {
      console.log(user);
       try {
        createUserProfileDocument(user, { displayName }).then(() => {
          this.setState({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
          }, () => {
              this.props.history.push('/');
          });
        });
      } catch (err) {
        console.log("Error signing up user", err);
      } 
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="signup">
        <h2>I do not have a account</h2>
        <span> Sign up with email and password</span>
        <FormInput
          type="text"
          label="Name"
          name="displayName"
          handleChange={this.onHandleChange}
          value={this.state.displayName}
          required
        />
        <FormInput
          type="email"
          label="Email"
          name="email"
          handleChange={this.onHandleChange}
          value={this.state.email}
          required
        />
        <FormInput
          type="password"
          label="Password"
          name="password"
          handleChange={this.onHandleChange}
          value={this.state.password}
          required
        />
        <FormInput
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          handleChange={this.onHandleChange}
          value={this.state.confirmPassword}
          required
        />
        <CustomButton>Sign up!</CustomButton>
      </form>
    );
  }
}
