import React from 'react';
import { FaSearch, FaRegBell, FaCaretDown } from 'react-icons/fa'; 
import './Header.css';

const Header = ({ black }) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="./img/logo.png" alt="Netflix Logo" />
                </a>
            </div>

            <nav className="header--nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/tvshows">TV Shows</a></li>
                    <li><a href="/movies">Movies</a></li>
                    <li><a href="/newpopular">New & Popular</a></li>
                    <li><a href="/mylist">My List</a></li>
                    <li><a href="/languages">Browse by Languages</a></li>
                </ul>
            </nav>
            
            <div className="header--user">
                <a href="/search" className="header--search">
                    <FaSearch size={20} color="white" />
                </a>
                <a href="/kids" className="header--kids">
                    Kids
                </a>
                <a href="/notifications" className="header--notifications">
                    <FaRegBell size={20} color="white" />
                </a>
                <a href="/" className="header--profile">
                    <img src="./img/user.png" alt="User Profile" />
                    <FaCaretDown size={14} color="white" className="header--dropdown-icon" />
                </a>
            </div>
        </header>
    );
};

export default Header;