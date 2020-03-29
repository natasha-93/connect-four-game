import React from 'react';

function Cell({ value = " ", onSelect, index }) {
  return (
    <div style={{ width: "3rem", height: "3rem", border: "1px solid black", display: "inline-block", position: "relative" }} onClick={e => {
      onSelect(index)
    }}>
      <div style={{ height: "100%", borderRadius: "100%", backgroundColor: value }} />
    </div>
  )
}

export default Cell;