import React from 'react'
import './style.css'

const banner = () => {
    return (
        <div className="container">
            <div className="board">
                <div className="p0">
                    Sareh Safuan
                </div>
                <div className="p1">
                    <i className="fab fa-pushed"></i>
                </div>
                <div className="p1">
                    Full Stack Developer
                </div>
                <div className="p1">
                    <i className="fab fa-pushed"></i>
                </div>
                <div className="p1">
                    Kuala Lumpur . Malaysia
                </div>
                <div className="p1">
                    <i className="fab fa-pushed"></i>
                </div>
                <div className="p1">
                    Make it work . Make it right . Make it fast . <small>v0.0.2</small>
                </div>
            </div>
        </div>
    )
}

export default banner