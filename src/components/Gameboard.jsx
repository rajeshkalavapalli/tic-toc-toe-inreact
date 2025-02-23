import { useState } from 'react';
import '../../src/Gameboard.css';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function Gameboard({ onSelectSquare, activePlayerSymbol }) { 
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSquareSelect(rowIndex, colIndex) {
        if (gameBoard[rowIndex][colIndex] !== null) return; // Prevent overwriting

        setGameBoard((prevGameBoard) => {
            // Deep copy: create a new board instead of modifying the existing one
            const updatedBoard = prevGameBoard.map(row => [...row]);
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol; // Set X or O
            
            return updatedBoard; // Return new state
        });

        if (onSelectSquare) {
            onSelectSquare({ row: rowIndex, col: colIndex, player: activePlayerSymbol });
        }
    }

    return (
        <div className="game-container">
            <ol className="GameBoard">
                {gameBoard.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol className="board-row">
                            {row.map((playerSymbol, colIndex) => (
                                <li key={colIndex} className="board-cell">
                                    <button 
                                        onClick={() => handleSquareSelect(rowIndex, colIndex)}
                                        disabled={playerSymbol !== null} // Prevent re-clicking
                                        className="square-btn"
                                    >
                                        {playerSymbol ?? ''} {/* Ensure X or O is shown */}
                                    </button>
                                </li>
                            ))}
                        </ol>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Gameboard;
