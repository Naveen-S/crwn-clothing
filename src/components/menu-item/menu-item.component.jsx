import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.style.scss';

function MenuItem({title, imageUrl, size, linkUrl, history, match}) {
    return (
        <div className={`${size} menu-item`} onClick={
            () => { 
                console.log(match);
                history.push(`${match.url}${linkUrl}`);
                }
            }>
            <div className="background-img" style={{backgroundImage: `url(${imageUrl})`}}>
            </div>
            <div className="content">
                <h1 className="title"> {title} </h1>
                <span className="subtitle"> SHOP NOW </span>    
            </div>      
        </div>
    )
}

// withRouter is an HOC which gives access to history, match and location props from BrowserRouter.
export default withRouter(MenuItem);