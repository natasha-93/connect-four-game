import React, { useState } from 'react';
import Cell from './Cell';

function App() {
  const emptyBoard = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
  const [board, setBoard] = useState(emptyBoard);
  const [turn, setTurn] = useState("red");

  function handleSelect(i) {
    const column = getCellColumn(i);
    const openIndex = getOpenCellByColumn(column)
    if (openIndex === null) {
      alert('invalid move')
    } else {
      const newBoard = [...board]
      newBoard[openIndex] = turn
      setTurn(turn === "red" ? "blue" : "red")
      setBoard(newBoard)
    }

  }

  function getCellColumn(i) {
    return i % 5
  }

  function getOpenCellByColumn(columnIndex) {
    for (let i = columnIndex + 15; i >= 0; i -= 5) {
      if (board[i] === "") {
        return i
      }
    }
    return null
  }

  return (
    <div>
      <div>
        <Cell value={board[0]} index={0} onSelect={handleSelect} />
        <Cell value={board[1]} index={1} onSelect={handleSelect} />
        <Cell value={board[2]} index={2} onSelect={handleSelect} />
        <Cell value={board[3]} index={3} onSelect={handleSelect} />
        <Cell value={board[4]} index={4} onSelect={handleSelect} />
      </div>
      <div>
        <Cell value={board[5]} index={5} onSelect={handleSelect} />
        <Cell value={board[6]} index={6} onSelect={handleSelect} />
        <Cell value={board[7]} index={7} onSelect={handleSelect} />
        <Cell value={board[8]} index={8} onSelect={handleSelect} />
        <Cell value={board[9]} index={9} onSelect={handleSelect} />
      </div>
      <div>
        <Cell value={board[10]} index={10} onSelect={handleSelect} />
        <Cell value={board[11]} index={11} onSelect={handleSelect} />
        <Cell value={board[12]} index={12} onSelect={handleSelect} />
        <Cell value={board[13]} index={13} onSelect={handleSelect} />
        <Cell value={board[14]} index={14} onSelect={handleSelect} />
      </div>
      <div>
        <Cell value={board[15]} index={15} onSelect={handleSelect} />
        <Cell value={board[16]} index={16} onSelect={handleSelect} />
        <Cell value={board[17]} index={17} onSelect={handleSelect} />
        <Cell value={board[18]} index={18} onSelect={handleSelect} />
        <Cell value={board[19]} index={19} onSelect={handleSelect} />
      </div>
      <button onClick={e => {
        setBoard([...emptyBoard])
      }}>Restart</button>
      <p>Turn: {turn}</p>
    </div>
  );
}

export default App;
