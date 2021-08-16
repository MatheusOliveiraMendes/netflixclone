import React from 'react';
import './Header.css';


// eslint-disable-next-line import/no-anonymous-default-export
export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="./img/logo.png" />
                </a>
            </div>
            
            <div className="header--user">
            <a href="/">
                    <img src="./img/user.png" />
                </a>
            </div>
        </header>
    )
}