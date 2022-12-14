import './App.css';
import { useState, useEffect, useRef } from "react"

function App() {

      // Initial state declarations

    const [currentTurn, setCurrentTurn] = useState(0);
    const [data, setData] = useState(['', '', '', '', '', '', '', '', '']);
    const [playerOneScore, setPlayerOneScore] = useState(0);
    const [playerTwoScore, setPlayerTwoScore] = useState(0);
    const [reset, setReset] = useState(false);
    const [winner, setWinner] = useState('');
    let tiles = document.getElementsByClassName('tile');

      //Board ref to be used in selecting it's children
    let boardRef = useRef('')

      //Reset function
    function resetBoard () {
        setReset(true)
    }

      // Draws on the board
    function draw (event, index) {

        if(data[index - 1] === '' && winner === '') {
            let currentValue = (currentTurn === 0) ? 'X' : 'O';
            data[index - 1] = currentValue;
            event.target.innerText = currentValue;
            if(currentTurn === 0) {tiles[index - 1].classList.add('neon-text-x')}
            else if(currentTurn === 1) {tiles[index - 1].classList.add('neon-text-o')}
            setCurrentTurn(currentTurn === 0 ? 1 : 0)
        }
    }

    useEffect(() => {

          // Checks if there's a winner on any row
        function checkRow () {
            let answer = false;
            for(let i = 0; i < 9; i+=3) {   
                if (data[i] === data[i + 1] && data[i] === data[i + 2] && data[i] !== '') { 
                    answer = true;
                    tiles[i].classList.add('winner')
                    tiles[i + 1].classList.add('winner');
                    tiles[i + 2].classList.add('winner');
                }
            }
        return answer;
        }
        
          // Checks if there's a winner on any col
        function checkCol () {
            let answer = false;
            for(let i = 0; i < 3; i++){
                if(data[i] === data[i + 3] && data[i] === data[i + 6] && data[i] !== '') {
                    answer = true;
                    tiles[i].classList.add('winner');
                    tiles[i + 3].classList.add('winner');
                    tiles[i + 6].classList.add('winner');
                }
            }
        return answer
        }
        
          // Checks if there's a winner on any diagonal
        function checkDiag () {
            let answer = false;
            if(data[0] === data[4] && data[0] === data[8] && data[0] !== '') {
                answer = true;
                tiles[0].classList.add('winner');
                tiles[4].classList.add('winner');
                tiles[8].classList.add('winner');
            }
            if(data[2] === data[4] && data[2] === data[6] && data[2] !== '') {
                answer = true;
                tiles[2].classList.add('winner');
                tiles[4].classList.add('winner');
                tiles[6].classList.add('winner');
            }
        return answer
        }

          //If there's a winner on any of the above, the winner is chosen according to the current turn
        const checkWin = () => {
            return (checkRow() || checkCol() || checkDiag())
        }

          // Tie check
        const checkTie = () => {
            let count = 0;
            data.forEach((cell) => {if (cell !== '') count++})
            return count === 9;
        }
          //Adds styles to the correct winner,
        if(checkWin()) {
            setWinner(currentTurn % 2 !== 0 ? 'first' : 'second')
            currentTurn % 2 !== 0 ? 
            setPlayerOneScore(playerOneScore => playerOneScore + 1):
            setPlayerTwoScore(playerTwoScore => playerTwoScore + 1)
            
            let playerArr = document.getElementsByClassName('player')
            currentTurn % 2 !== 0 ? 
            playerArr[0].classList.add('winner') :
            playerArr[1].classList.add('winner')              
        }
        else if(checkTie()) {
            let playerArr = document.getElementsByClassName('player')
            playerArr[0].classList.add('winner')
            playerArr[1].classList.add('winner')
        }
    }, [currentTurn, data, tiles])
    useEffect(() => {

          //Selects each tile with it's content and performs any cleaning needed
        const cells = boardRef.current.children;
        console.log(cells)
        for(let i = 0; i < 9; i++) {
            cells[i].children[0].innerText = '';
            cells[i].children[0].classList.remove('neon-text-x', 'neon-text-o', 'winner')
        }
        let playerArr = document.getElementsByClassName('player')
        playerArr[0].classList.remove('winner')
        playerArr[1].classList.remove('winner')
        setData(['', '', '', '', '', '', '', '', ''])
        setReset(false)
        setCurrentTurn(0)
        setWinner('')
    }, [reset, setReset])

    return (
    <div className="App">
        <div className="main-container">
            <div className="reset-container">
                <button className="reset-butt" onClick={resetBoard}>RESET</button>
            </div>
            <div className="board" ref={boardRef}>
                <div className='tile-container' onClick= {(e) => {draw(e, 1)}}>
                    <div className="tile"></div>
                </div>
                <div className='tile-container'>
                    <div className="tile" onClick= {(e) => {draw(e, 2)}}></div>
                </div>
                <div className='tile-container'>
                    <div className="tile" onClick= {(e) => {draw(e, 3)}}></div>
                </div>
                <div className='tile-container'>
                    <div className="tile" onClick= {(e) => {draw(e, 4)}}></div>
                </div>
                <div className='tile-container'>
                    <div className="tile" onClick= {(e) => {draw(e, 5)}}></div>
                </div>
                <div className='tile-container'>
                    <div className="tile" onClick= {(e) => {draw(e, 6)}}></div>
                </div>
                <div className='tile-container'>
                    <div className="tile" onClick= {(e) => {draw(e, 7)}}></div>
                </div>
                <div className='tile-container'>
                    <div className="tile" onClick= {(e) => {draw(e, 8)}}></div>
                </div>
                <div className='tile-container'>
                    <div className="tile" onClick= {(e) => {draw(e, 9)}}></div>
                </div>
            </div>
            <div className="info">
                <div className="player">
                    <div className="player-info"><h2>Player 1 :</h2></div>
                    <div className="score score-x">{playerOneScore}</div>
                </div>
                <div className="player">
                    <div className="player-info"><h2>Player 2 :</h2></div>
                    <div className="score score-o">{playerTwoScore}</div>
                </div>
            </div>
        </div>
    </div> 
    )
}

export default App;
