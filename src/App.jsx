import React, { Fragment, useState } from 'react'
import "./style.css"

const App = () => {

    const [toggle, setToggle] = useState(false)
    const [content, setContent] = useState(<Home />)

    const toggleMobileMenu = () => {
        setToggle(!toggle)
    }

    const changeContent = (e) => {
        const el = e.target
        if (el.tagName === "A") {
            const id = +el.id.substr(-1)

            switch (id) {
                case 1:
                    setContent(<Home />)
                    break
                case 2:
                    setContent(<Works />)
                    break
                case 3:
                    setContent(<Contact />)
                    break
                default:
                    setContent(<Home />)
                    break
            }
        }
    }

    const mobileChangeContent = (e) => {
        changeContent(e)
        toggleMobileMenu()
    }

    return (
        <Fragment>
            <div className="navbar">
                <div className="logo">
                    smsafuan.com
                </div>
                <Menus changeContent={changeContent} />
                <HamburgerButton toggleMobileMenu={toggleMobileMenu} />
            </div>
            <MobileMenus
                toggle={toggle}
                toggleMobileMenu={toggleMobileMenu}
                mobileChangeContent={mobileChangeContent}
            />
            {content}
        </Fragment>
    )
}

const Menus = ({ changeContent }) => {
    return (
        <div className="menus">
            <ul onClick={changeContent}>
                <li>
                    <a href="#/home" id="content-1">Home</a>
                </li>
                <li>
                    <a href="#/works" id="content-2">Works</a>
                </li>
                <li>
                    <a href="#/contact" id="content-3">Contact</a>
                </li>
            </ul>
        </div>
    )
}

const HamburgerButton = ({ toggleMobileMenu }) => {
    return (
        <div className="toggle-icon" onClick={toggleMobileMenu} >
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
        </div>
    )
}

const MobileMenus = ({ toggle, toggleMobileMenu, mobileChangeContent }) => {
    const transform = toggle ? 'translateX(0)' : 'translateX(100%)'
    return (
        <div className="mobile-menus" style={{ transform }}>
            <div className="mobile-close">
                <a
                    href="#"
                    onClick={toggleMobileMenu}
                >
                    X
                </a>
            </div>
            <ul onClick={mobileChangeContent}>
                <li>
                    <a href="#/home" id="content-1">Home</a>
                </li>
                <li>
                    <a href="#/works" id="content-2">Works</a>
                </li>
                <li>
                    <a href="#/contact" id="content-3">Contact</a>
                </li>
            </ul>
        </div>
    )
}

const Home = () => {
    return (
        <div className="container">
            <div className="content">
                <span className="wlcm">Hi!</span>
                <div className="wrapper-info">
                    <span className="info">
                        I'm Sareh Safuan, Software Engineer
                    </span>
                    <span className="info">
                        based in Kuala Lumpur. I code mainly
                    </span>
                    <span className="info">
                        in JavaScript and Python.
                    </span>
                    <span className="mobile-info">
                        I'm Sareh Safuan, Software Engineer based in Kuala Lumpur.
                        I code mainly in JavaScript and Python.
                    </span>
                </div>
            </div>
        </div>
    )
}

const Works = () => {
    return (
        <div className="container">
            <h2>Works</h2>
        </div>
    )
}

const Contact = () => {

    const [viewEmail, setViewEmail] = useState(false)
    const email = viewEmail ? <p>sarehsafuan@gmail.com</p> : <span></span>

    return (
        <div className="container">
            <div className="component">
                <div>
                    Click on the <span
                        className="e-link"
                        onClick={() => { setViewEmail(!viewEmail) }}
                    >link</span> to view my email address.
                </div>
                <div className="email-viewer">
                    {email}
                </div>
            </div>
        </div>
    )
}

export default App