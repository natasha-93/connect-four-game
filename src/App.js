import React, { useState } from "react";
import Cell from "./Cell";
import Button from "./Button";
import GameContainer from "./GameContainer";
import GameStructure from "./GameStructure";
import ArrowRow from "./ArrowRow";

function App() {
  const emptyBoard = new Array(20).fill("");
  const [board, setBoard] = useState(emptyBoard);
  const [turn, setTurn] = useState("red");
  const [hoveredColumn, setHoveredColumn] = useState(-1);

  function handleSelect(i) {
    const column = getCellColumn(i);
    const openIndex = getOpenCellByColumn(column);
    if (openIndex === null) {
      alert("Invalid move");
    } else {
      const newBoard = [...board];
      newBoard[openIndex] = turn;
      setTurn(turn === "red" ? "blue" : "red");
      setBoard(newBoard);
    }
  }

  function handleHover(index) {
    const column = getCellColumn(index);
    setHoveredColumn(column);
  }

  function getCellColumn(i) {
    return i % 5;
  }

  function getOpenCellByColumn(columnIndex) {
    for (let i = columnIndex + 15; i >= 0; i -= 5) {
      if (board[i] === "") {
        return i;
      }
    }
    return null;
  }

  return (
    <GameContainer>
      <ArrowRow index={hoveredColumn} turn={turn}>
        ⬇
      </ArrowRow>
      <GameStructure>
        <div>
          <Cell
            value={board[0]}
            index={0}
            onSelect={handleSelect}
            onHover={handleHover}
          />
          <Cell
            value={board[1]}
            index={1}
            onSelect={handleSelect}
            onHover={handleHover}
          />
          <Cell
            value={board[2]}
            index={2}
            onSelect={handleSelect}
            onHover={handleHover}
          />
          <Cell
            value={board[3]}
            index={3}
            onSelect={handleSelect}
            onHover={handleHover}
          />
          <Cell
            value={board[4]}
            index={4}
            onSelect={handleSelect}
            onHover={handleHover}
          />
        </div>
        <div>
          <Cell
            value={board[5]}
            index={5}
            onSelect={handleSelect}
            onHover={handleHover}
          />
          <Cell
            value={board[6]}
            index={6}
            onSelect={handleSelect}
            onHover={handleHover}
          />
          <Cell
            value={board[7]}
            index={7}
            onSelect={handleSelect}
            onHover={handleHover}
          />
          <Cell
            value={board[8]}
            index={8}
            onSelect={handleSelect}
            onHover={handleHover}
          />
          <Cell
            value={board[9]}
            index={9}
            onSelect={handleSelect}
            onHover={handleHover}
          />
        </div>
        <div>
          <Cell
            value={board[10]}
            index={10}
            onSelect={handleSelect}
            onHover={handleHover}
          />
          <Cell
            value={board[11]}
            index={11}
            onSelect={handleSelect}
            onHover={handleHover}
          />
          <Cell
            value={board[12]}
            index={12}
            onSelect={handleSelect}
            onHover={handleHover}
          />
          <Cell
            value={board[13]}
            index={13}
            onSelect={handleSelect}
            onHover={handleHover}
          />
          <Cell
            value={board[14]}
            index={14}
            onSelect={handleSelect}
            onHover={handleHover}
          />
        </div>
        <div>
          <Cell
            value={board[15]}
            index={15}
            onSelect={handleSelect}
            onHover={handleHover}
          />
          <Cell
            value={board[16]}
            index={16}
            onSelect={handleSelect}
            onHover={handleHover}
          />
          <Cell
            value={board[17]}
            index={17}
            onSelect={handleSelect}
            onHover={handleHover}
          />
          <Cell
            value={board[18]}
            index={18}
            onSelect={handleSelect}
            onHover={handleHover}
          />
          <Cell
            value={board[19]}
            index={19}
            onSelect={handleSelect}
            onHover={handleHover}
          />
        </div>
      </GameStructure>
      <Button
        onClick={(e) => {
          setBoard([...emptyBoard]);
        }}
      >
        Restart
      </Button>
    </GameContainer>
  );
}

export default App;
