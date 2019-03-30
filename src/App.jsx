import React from 'react'
import ReactDOM from 'react-dom'
import Screen from './components/Screen.jsx'
import Banner from './components/Banner.jsx'
import Physic from './pyhsics/index'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            screen: { width: null, height: null }
        }
        this.physic = new Physic()
    }

    componentDidMount() {
        const width = window.innerWidth
        const height = window.innerHeight
        this.setState({ screen: { width, height } }) 
        this.physic.run()
        this.physic.addBodies(width, height)

        setTimeout(() => {
            this.physic.reverseGravity()
        }, 5000)
    }

    resizeHandler() {
        window.addEventListener('resize', () => {
            const width = window.innerWidth
            const height = window.innerHeight
            this.setState({ screen: { width, height } })
        })
    }

    render() {
        const element = document.getElementById('screen')
        const screen = {
            width: this.state.screen.width,
            height: this.state.screen.height,
            element
        }

        if(element !== null) {
            this.physic.stop()
            this.physic.render(screen)
        }

        return (
            <div>
                <Screen  screen={screen} />
                <Banner />
            </div>
        )
    }
}

export default App