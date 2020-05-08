import React from "react";
import styled from "styled-components";

const StyledCell = styled(Cell)`
  width: 3rem;
  height: 3rem;
  border: 1px solid black;
  display: inline-block;
  position: relative;
  margin: 0 0.1rem;
  background-color: white;
`;

const StyledCellInner = styled.div`
  height: 100%;
  border-radius: 100%;
  background-color: ${(props) => props.value};
`;

function Cell({ value = " ", onSelect, onHover, index, ...props }) {
  return (
    <div
      onMouseEnter={(e) => {
        onHover(index);
      }}
      onClick={(e) => {
        onSelect(index);
      }}
      {...props}
    >
      <StyledCellInner value={value} />
    </div>
  );
}

export default StyledCell;
