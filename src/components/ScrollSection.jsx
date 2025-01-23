import styled from "styled-components";

const ScrollSection = ({ children, title }) => {
  return (
    <Wrapper>
      {title && <h2 className="title">{title}</h2>}
      <div className="container">{children}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 2.5rem;
  position: relative;
  .title {
    font-family: Literata;
    color: #00000099;
    font-size: 2.1rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .container {
    display: flex;
    gap: 1.2rem;
    overflow-x: scroll;
    padding-bottom: 5px;
    margin: 0 !important;

    /* height: 14rem; */
  }
  .container::-webkit-scrollbar-thumb {
    background-color: #d4d4d4;
    border-radius: 10px;
    cursor: pointer;
  }
  .container::-webkit-scrollbar {
    height: 0.5rem;
  }
`;
export default ScrollSection;
