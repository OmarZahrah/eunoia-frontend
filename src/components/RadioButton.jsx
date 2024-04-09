import styled from "styled-components";

function RadioButton({ head, details }) {
  return (
    <Wrapper>
      <input type="radio" value="Price" />
      <span>
        {head}
        <br /> {details}
      </span>
    </Wrapper>
  );
}

export default RadioButton;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: #00000099;

  span {
    font-size: 0.9rem;
    margin-left: 0.5rem;
  }

  input {
    width: 1.1rem;
    height: 1.1rem;
  }
`;
