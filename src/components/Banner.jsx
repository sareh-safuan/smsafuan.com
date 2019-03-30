import React from 'react'

const container =  {
    width: "700px",
    height: "350px",
    backgroundColor: "#f7f7f7",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    fontFamily: "'Roboto', sans-serif",
}

const board = {
    margin: "20px"
}

const p0 = {
    fontSize: '90px',
    margin: '5px',
    textAlign: 'center'
}

const p1 = {
    textAlign: 'center',
    margin: '12px'
}

const banner = () => {
    return (
        <div style={container}>
            <div style={board}>
                <div style={p0}>
                    Sareh Safuan
                </div>
                <div style={p1}>
                    <i className="fab fa-pushed"></i>
                </div>
                <div style={p1}>
                    Full Stack Developer
                </div>
                <div style={p1}>
                    <i className="fab fa-pushed"></i>
                </div>
                <div style={p1}>
                    Kuala Lumpur . Malaysia
                </div>
                <div style={p1}>
                    <i className="fab fa-pushed"></i>
                </div>
                <div style={p1}>
                    Make it work . Make it right . Make it fast . <small>v0.0.2</small>
                </div>
            </div>
        </div>
    )
}

export default banner