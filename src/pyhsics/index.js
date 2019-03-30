import Matter from 'matter-js'

const Pyhsics = function() {
    const Engine = Matter.Engine
    const Render = Matter.Render
    const Runner = Matter.Runner
    const World = Matter.World
    const Bodies = Matter.Bodies
    const Mouse = Matter.Mouse
    const MouseConstraint = Matter.MouseConstraint

    const engine = Engine.create()
    const world = engine.world
    let scene = null
    let runner = null

    function render(params) {
        const { element, width, height } = params
        scene = Render.create({
            element,
            engine,
            options: {
                width,
                height,
                showAngleIndicator: false,
                wireframes: true
            } 
        })

        scene.canvas.style.display = "block"
        
        Render.run(scene)

        runner = Runner.create()
        Runner.run(runner, engine)

        const mouse = Mouse.create(scene.canvas)
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        })

        World.add(world, mouseConstraint)
    }

    function addBodies(maxWidth, maxHeight) {
        const balls = []
        const rects = []

        for(let i = 0; i < 60; i++) {
            balls.push(Bodies.circle(
                Math.random() * maxWidth, 
                Math.random() * 70, 
                Math.random() * 35, 
                { restitution: Math.random()}
            ))
            rects.push(Bodies.rectangle(
                Math.random() * maxWidth, 
                Math.random() * 70,
                Math.random() * 55,
                Math.random() * 55,
                { restitution: Math.random() }
            ))
        }
        World.add(world, balls)
        World.add(world, rects)
        
        const floor = Bodies.rectangle((maxWidth / 2), (maxHeight - 10), maxWidth, 20, { isStatic: true })
        World.add(world, floor)
    }

    function stop() {
        Render.stop(scene)
        World.clear(world)
        Engine.clear(engine)
        Runner.stop(runner)
        scene.canvas.remove()
        scene.canvas = null
        render.context = null
        render.textures = {}
    }
    
    return {
        render,
        stop,
        addBodies
    }
}

export default Pyhsics



