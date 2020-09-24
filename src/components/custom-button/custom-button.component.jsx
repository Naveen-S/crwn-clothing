import React from "react";
import styled, { css } from "styled-components";
import "./custom-button.style.scss";

export default function CustomButton({
  children,
  inverted,
  isGoogleSignIn,
  ...OtherProps
}) {
  return (
    // <button
    //   className={`${inverted ? "inverted" : ""} ${
    //     isGoogleSignIn ? "google-signin" : ""
    //   } custom-button`}
    //   {...OtherProps}
    // >
    //   {children}
    // </button>

    <Button isGoogleSignIn={isGoogleSignIn} inverted={inverted} {...OtherProps}>
        {children}
    </Button>
  );
}

const getButtonStyle = (props) => {
    if(props.isGoogleSignIn) {
        return googleSignInStyle;
    }

    return props.inverted? invertedStyle:basicStyle;
}

const basicStyle = css`
  background-color: black;
  color: white;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedStyle = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`;

const googleSignInStyle = css`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
    &:focus {
        outline: none;
    }
`;

const Button = styled.button`
  min-width: 165px;
  width: 100%;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  ${getButtonStyle}
`;
