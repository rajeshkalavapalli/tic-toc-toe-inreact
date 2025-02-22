import { useState } from 'react';
import '../../src/Gameboard.css'
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function Gameboard() {

    const [ GameBoard, setGameBoard ]= useState( initialGameBoard);

    function handlesqureSelect ( rowIndex, colIndex){
        
        setGameBoard( ( prevGameBoard) => {
            const updateBoard = [...prevGameBoard.map(innerArray =>[...innerArray])]
            updateBoard[rowIndex][colIndex] = 'x';
            return updateBoard
        });

    }

    return (
        <ol className="GameBoard">
            {GameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playersymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={()=>handlesqureSelect (rowIndex, colIndex)}>{playersymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}

export default Gameboard;
