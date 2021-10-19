import { Person, Chat, Search, Notifications } from "@material-ui/icons"
import { Link } from 'react-router-dom'
import React from 'react'
import './Header.css'

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <h1>DummySocial</h1>
            </div>
            <div className="page-info">
                <div className="search-bar">
                    <Search className="icon" />
                    <input type="text" placeholder="search here" />
                </div>
            </div>
            <div className="profile-info">
                <a href="#"><Link className="nav-link-item" to="/">Home</Link></a>
                <a href="#"><Link className="nav-link-item" to="/profile">My profile</Link></a>
                <div className="info">
                    <Person className="icon" />
                    <p>1</p>
                </div>
                <div className="info">
                    <Chat className="icon" />
                    <p>4</p>
                </div>
                <div className="info">
                    <Notifications className="icon" />
                    <p>2</p>
                </div>
                <div className="profile">
                    <img src="/assets/profiles/IMG-20210101-WA0003.jpg" alt="" />
                </div>
            </div>
        </header>
    )
}

export default Header
