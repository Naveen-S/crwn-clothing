import React from "react";
// import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, currentUser, ...rest }) {
    console.log(currentUser);

  return <Route
            {...rest}
            render = {(props) => {
                console.log(props);
                console.log(currentUser);
                return currentUser ? <Component {...props} /> : <Redirect to="/signin" />
            }}
            >
        </Route>;
}
// const mapStateToProps = (state) => {
    // return {user: state.user}
// }
// export default connect(mapStateToProps)(ProtectedRoute);
export default ProtectedRoute;
