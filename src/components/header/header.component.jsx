import React from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crwn.svg';
import {auth} from '../../firebase/firebase.util';
import './header.style.scss';

function Header({currentUser}) {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" to="/"> </Logo>
            </Link>
            <div className="options">
                <Link to="/shop" className="option"> SHOP</Link>
                <Link to="/contact" className="option"> CONTACT</Link>
                {
                    currentUser?
                    <div className="option" onClick={() => auth.signOut()}> SIGN OUT</div>:
                    <Link to="/signin" className="option">SIGN IN</Link>
                }
            </div>
        </div>
    )
}

const mapStatetpProps = (state) => {
    return {
        currentUser: state.user.currentUser
    }
}
export default connect(mapStatetpProps)(Header);
