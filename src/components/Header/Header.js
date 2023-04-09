import React from 'react';
import './Header.css'

function Header(props) {
    const isActiveMyItems = props.activeTab === "MyItems";
    const isActiveAnalytics = props.activeTab === "Analytics";
    const isActiveAddItem = props.activeTab === "AddItem";

    const token = localStorage.getItem('bearerToken');

    const handleSignOut = () => {
        localStorage.removeItem('bearerToken')
    }

    return (
        <nav className="navbar navbar-expand-lg mb-5">
            <div className="container-fluid">
                <a className="title">Analytics AI</a>

                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <a className={`nav-link ${isActiveMyItems ? 'disabled' : 'active'}`} href="#" onClick={props.toggleMyItems}>My Items</a>
                        </li>

                        <li className="nav-item">
                            <a className={`nav-link ${isActiveAnalytics ? 'disabled' : 'active'}`} href="#" onClick={props.toggleAnalytics}>Analytics</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${isActiveAddItem ? 'disabled' : 'active'}`} href="#" onClick={props.toggleAddItem}>Add Item</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        {!token && (<button className="btn btn-outline-success" type='button' onClick={props.toggleSignUp}>Log in / Sign up</button>)}
                        {token && (<button className="btn btn-outline-secondary" type='button' onClick={handleSignOut}>Sign out</button>)}
                    </form>
                </div>

            </div>
        </nav >
    );
}

export default Header;
