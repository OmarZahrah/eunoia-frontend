import styled from "styled-components";

function TitleDesc({ title, description }) {
  return (
    <Wrapper>
      <p>{title}</p>
      <span>{description}</span>
      {/* <hr /> */}
    </Wrapper>
  );
}

export default TitleDesc;

const Wrapper = styled.div`
  p {
    color: #00000099;
    font-size: 1.6rem;
    font-weight: 600;
  }
  span {
    color: #06050599;
  }
  hr {
    width: 70%;
    border-color: rgba(0, 0, 0, 0.2);
    margin: 2rem auto;
  }
`;
