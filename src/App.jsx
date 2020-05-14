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
                    logowashere
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
            <span
                style={{ fontSize: '24px' }}
                onClick={toggleMobileMenu}
            >
                X
            </span>
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

const Home = () => <h2>Home</h2>

const Works = () => <h2>Works</h2>

const Contact = () => <h2>Contact</h2>

export default App