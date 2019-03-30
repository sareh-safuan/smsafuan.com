import React from 'react'

const style = {
    width: "700px",
    height: "350px",
    backgroundColor: "#e4e0df",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
}

const board = {
    margin: "20px"
}

const p1 = {
    fontFamily: "'Roboto', sans-serif",
    fontSize: '100px',
    padding: 0
}

const p2 = {
    fontFamily: "'Roboto', sans-serif",
    fontSize: "24px",
    margin: "5px"
}

const p3 = {
    fontFamily: "'Roboto', sans-serif",
    fontSize: "14px",
    margin: "15px 5px"
}

const banner = () => {
    return (
        <div style={style}>
            <div style={board}>
                <div style={p1}>
                    I'm
                </div>
                <div style={p1}>
                    Safuan
                </div>
                <div style={p2}>
                    Web Developer
                </div>
                <div style={p3}>
                    Website still in progress: V 1.0.0
                </div>
            </div>
        </div>
    )
}

export default banner