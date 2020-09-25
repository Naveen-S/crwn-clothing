import React from 'react'

const withLoader = (WrappedComponent) => {
    const InnerComponent = (props) => {
        console.log(props);
        if(props.loading) {
            return <div> Loading... </div>
        } else {
            return <WrappedComponent {...props} />
        }
    } 
    return InnerComponent;
}

export default withLoader;  