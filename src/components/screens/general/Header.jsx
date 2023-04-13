import React from 'react';

function Header() {
    return (
        <div className="header-main-box wrapper">
            <div className="left">
                <div className="header-logo-container">
                    <img src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f2b060c7a92408bac811_logo.svg" alt="Logo" />
                </div>
            </div>
            <div className="header-nav-items">
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;