import { useState } from "react"

function CurrentTurn() {

    const [currentTurn, setCurrentTurn] = useState(2)
    
    return(
        <div className="turn">
            <h1>Player {currentTurn}</h1>
        </div>
    )
}
export default CurrentTurn