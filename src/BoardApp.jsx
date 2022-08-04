import { useState } from "react"

function Gameboard () {

    const [currentTurn, setCurrentTurn] = useState(0);

    const [data, setData] = useState(['', '', '', '', '', '', '', '', '']);

    function draw (event, index) {

        if(data[index - 1] === '') {

            let currentValue = currentTurn === 0 ? 'X' : 'O';
            data[index - 1] = currentValue;
            event.target.innerText = currentValue;

            let tiles = document.getElementsByClassName('tile')
            if(currentTurn === 0) {tiles[index - 1].classList.add('neon-text-x')}
            else if(currentTurn === 1) {tiles[index - 1].classList.add('neon-text-o')}

            setCurrentTurn(currentTurn === 0 ? 1 : 0)

        }
    }

    return(
        <div className="main-container">
            <div className="reset-container">
                <button className="reset-butt">RESET</button>
            </div>
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
            <div className="info">
                <div className="player">
                    <div className="player-info"><h2>Player 1 :</h2></div>
                    <div className="neon-text-x neon-text-shrink">X</div>
                </div>
                <div className="player">
                    <div className="player-info"><h2>Player 2 :</h2></div>
                    <div className="neon-text-o neon-text-shrink">O</div>
                </div>
            </div>
        </div>
       
    )
}

export default Gameboard