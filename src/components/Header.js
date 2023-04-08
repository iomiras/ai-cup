import React from 'react';
import './Header.css'

function Header(props) {
    const isActiveMyItems = props.activeTab === "MyItems";
    const isActiveAnalytics = props.activeTab === "Analytics";
    const isActiveAddItem = props.activeTab === "AddItem";

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Analytics AI</a>

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
                        <button className="btn btn-outline-success" type='button' onClick={props.toggleSignUp}>Log in / Sign up</button>
                    </form>
                </div>

            </div>
        </nav >
    );
}

export default Header;
