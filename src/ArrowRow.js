import styled from "styled-components";
// 3.2rem right each column
const ArrowRow = styled.div`
  height: 3rem;
  font-size: 2rem;
  padding-left: ${(props) => props.index * 3.2 + 0.8}rem;
  opacity: ${(props) => (props.index < 0 ? 0 : 1)};
  color: ${(props) => props.turn};
`;

export default ArrowRow;
