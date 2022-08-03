import { useState } from "react"

function Gameboard () {

    const [currentTurn, setCurrentTurn] = useState(0);

    const [data, setData] = useState(['', '', '', '', '', '', '', '', '']);

    function draw (event, index) {

        if(data[index - 1] === '') {

            let currentValue = currentTurn === 0 ? 'X' : 'O';
            data[index - 1] = currentValue;
            event.target.innerText = currentValue;
            setCurrentTurn(currentTurn === 0 ? 1 : 0)
            console.log(currentTurn)

        }
    }

    return(
        <div className="board">
            <div className="tile" onClick= {(e) => {draw(e, 1)}}></div>
            <div className="tile" onClick= {(e) => {draw(e, 2)}}></div>
            <div className="tile" onClick= {(e) => {draw(e, 3)}}></div>
            <div className="tile" onClick= {(e) => {draw(e, 4)}}></div>
            <div className="tile" onClick= {(e) => {draw(e, 5)}}></div>
            <div className="tile" onClick= {(e) => {draw(e, 6)}}></div>
            <div className="tile" onClick= {(e) => {draw(e, 7)}}></div>
            <div className="tile" onClick= {(e) => {draw(e, 8)}}></div>
            <div className="tile" onClick= {(e) => {draw(e, 9)}}></div>
        </div>
    )
}

export default Gameboard