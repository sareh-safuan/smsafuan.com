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
                    Javascript . Lifelong Learner . Version <i><small>0.0.3</small></i>
                </div>
            </div>
        </div>
    )
}

export default banner