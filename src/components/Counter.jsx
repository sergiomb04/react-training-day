import { useEffect, useState } from "react"
import './Counter.css'

function Counter() {
    const [count, setCount] = useState(0)

    const increaseCount = () => setCount(prevCount => prevCount + 1)

    const decreaseCount = () => {
        if (count === 0) return;
        setCount(prevCount => prevCount - 1)
    }

    const resetCount = () => setCount(0)

    useEffect(() => {
        console.log(`El contador ha cambiado: ${count}`)
        document.title = 'Contador: ' + count;
    }, [count])

    return (
        <div className="countContainer">
            <p className="countDisplay">{count}</p>
            <div className="controls">
                <button className="increaseButton" onClick={increaseCount}>Incrementar</button>
                <button className="decreaseButton" onClick={decreaseCount}>Decrementar</button>
                <button className="resetButton" onClick={resetCount}>Restablecer</button>
            </div>
        </div>
    )
}


export default Counter;