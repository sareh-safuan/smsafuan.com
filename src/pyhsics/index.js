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

    function render(params) {
        const { element, width, height } = params
        scene = Render.create({
            element,
            engine,
            options: {
                width,
                height,
                showAngleIndicator: true
            } 
        })

        scene.canvas.style.display = "block"
        
        Render.run(scene)

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

    function run() {
        const runner = Runner.create()
        Runner.run(runner, engine)
    }

    function stop() {
        if(scene !== null) {
            scene.canvas.remove()
        }
    }

    function addBodies(maxWidth, maxHeight) {
        const balls = []
        const rects = []

        for(let i = 0; i < 120; i++) {
            balls.push(Bodies.circle(
                Math.random() * maxWidth, 
                Math.random() * 70, 
                Math.random() * 25, 
                { restitution: Math.random()}
            ))
            rects.push(Bodies.rectangle(
                Math.random() * maxWidth, 
                Math.random() * 70,
                Math.random() * 35,
                Math.random() * 35,
                { restitution: Math.random() }
            ))
        }
        World.add(world, balls)
        World.add(world, rects)
        
        const floor = Bodies.rectangle((maxWidth / 2), (maxHeight - 18), maxWidth, 20, { isStatic: true })
        World.add(world, floor)


    }

    function reverseGravity() {
        engine.world.gravity.y = -0.5
        setInterval(() => {
            engine.world.gravity.y = 1
        }, 2000)
    }
    
    return {
        render,
        run,
        stop,
        addBodies,
        reverseGravity
    }
}

export default Pyhsics



