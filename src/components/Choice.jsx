import styled from "styled-components";

function Choice({ text, onClick }) {
  return <Wrapper onClick={onClick}>{text}</Wrapper>;
}

export default Choice;

const Wrapper = styled.button`
  width: auto;
  font-size: 14px;
  padding: 10px 20px;
  height: 40px;
  margin: 10px !important;
  background-color: transparent;
  border-radius: 50px;
  border: 2px solid #ccc;
  color: #787777;
  cursor: pointer;
`;