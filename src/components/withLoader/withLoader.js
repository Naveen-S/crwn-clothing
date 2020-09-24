import React from 'react'

const withLoader = (WrappedComponent, isLoading) => {
    function innerComponent() {
        if(isLoading) {
            return <div> Loading... </div>
        } else {
            return <WrappedComponent />
        }
    } 
    return innerComponent;
}

export default withLoader;