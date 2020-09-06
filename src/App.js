import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.util';
import { userAction } from './actions/user_actions';
import './App.css';

class App extends  Component {

  unsubscribeFromAuth = null;
  
  componentDidMount() {
    /* 
      On either signin/signup/oauth signin auth will change which results in this event to be triggered.
      userAuth: null -> On signout
      
    */
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // In case of signout userAuth will be null
      if(userAuth) {
        // Google signin / EmailId password signin happened, it returns userRef
        const userRef = await createUserProfileDocument(userAuth);
        console.log(userRef);
        if(!userRef) {
          return;
        }
        // OnSnapShot will you the document(i.e. that row) without data. 
        // For user's data call snapShot.data()
        userRef.onSnapshot(snapShot => {
            // this.setState({
            //   currentUser: { id: snapShot.id, ...snapShot.data()}
            // })
            this.props.userAction({ id: snapShot.id, ...snapShot.data()});
        })
      } else {
        // this.setState({currentUser: userAuth});
        this.props.userAction(userAuth);
      }

    })
  }

  componentWillUnmount() {
      this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        {/* <Route exact path='/signin' component={SignInSignUpPage} /> */}
        <Route exact path='/signin' render={() => {
          return this.props.currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
        }} />

      </div>
    );
  }
  
}

const mapStateToProps = (state) => {
  const {user} = state;
  return {currentUser: user.currentUser}
}

const mapDispatchToProps = (dispatch) => {
  return {userAction: user => { dispatch(userAction(user))}};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
