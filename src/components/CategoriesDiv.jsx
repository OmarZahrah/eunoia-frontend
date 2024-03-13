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

  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
    width: 8rem;
  }

  @media only screen and (max-width: 52.5em) {
    width: 40rem;
    height: 10rem;
    margin-top: 0rem !important;
    margin-bottom: 1.5rem !important;
    span {
      writing-mode: horizontal-tb;
      font-size: 23px;
      font-weight: 900;
      letter-spacing: 15px;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    width: 20rem;
    height: 9rem;
    span {
      writing-mode: horizontal-tb;
      font-size: 20px;
      font-weight: 800;
      letter-spacing: 10px;
    }
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

  @media only screen and (max-width: 52.5em) {
    border-radius: 10px;
  }
`;
