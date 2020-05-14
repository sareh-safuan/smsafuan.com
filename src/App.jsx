import React, { Fragment, useState } from 'react'
import "./style.css"

const App = () => {

    const [toggle, toggleMenu] = useState(false)

    const renderMobileMenus = () => {
        const transform = toggle ? 'translateX(0)' : 'translateX(100%)'
        return (
            <div
                className="mobile-menus"
                style={{ transform }}
            >
                <span
                    style={{ fontSize: '24px' }}
                    onClick={() => {
                        toggleMenu(!toggle)
                    }}
                >
                    X
                </span>
                <ul>
                    <li>
                        <button>Home</button>
                    </li>
                    <li>
                        <button>Works</button>
                    </li>
                    <li>
                        <button>Contact</button>
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <Fragment>
            <div className="navbar">
                <div className="logo">
                    logowashere
                </div>
                <div className="menus">
                    <ul>
                        <li>home</li>
                        <li>works</li>
                        <li>contact</li>
                    </ul>
                </div>
                <div className="toggle-icon" onClick={() => {
                    toggleMenu(!toggle)
                }}>
                    <div className="burger"></div>
                    <div className="burger"></div>
                    <div className="burger"></div>
                </div>
            </div>
            {renderMobileMenus()}
        </Fragment>
    )
}

export default App