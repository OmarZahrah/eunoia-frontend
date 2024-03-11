import { Link } from "react-router-dom";
import styled from "styled-components";

function CategoriesDiv({ backgroundImage, title, link, marginTop }) {
  return (
      <Wrapper style={{ marginTop }}>
          <Link to={link}>
        <Background backgroundImage={backgroundImage} />
        <span>{title}</span>
    </Link>
      </Wrapper>
  );
}

export default CategoriesDiv;

const Wrapper = styled.div`
  width: 9rem;
  height: 28rem;
  position: relative;
  margin-top: ${({ marginTop }) => marginTop};

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-size: 18px;
    font-weight: 900;
    letter-spacing: 1px;
    white-space: nowrap;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ backgroundImage }) => `url(${backgroundImage})`};
  opacity: 0.5;
  background-size: cover;
  transition: opacity 0.3s ease;

  ${Wrapper}:hover & {
    opacity: 1;
  }
`;
