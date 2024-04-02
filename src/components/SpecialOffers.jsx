import { Link } from "react-router-dom";
import styled from "styled-components";

function SpecialOffers({ link, backgroundImage, percentage, title, category }) {
  return (
    <Link to={link}>
      <Wrapper backgroundImage={backgroundImage}>
        <h1>{percentage}</h1>
        <span>{title}</span>
        <p>{category}</p>
      </Wrapper>
    </Link>
  );
}

export default SpecialOffers;
const Wrapper = styled.div`
  width: 25rem;
  height: 13rem;
  background: ${({ backgroundImage }) => `url(${backgroundImage})`};
  border-radius: 25px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  padding-left: 10px;
  padding-bottom: 10px;
  span {
    font-size: 23px;
  }
  p {
    font-size: 17px;
    line-height: 17.82px;
  }
  
`;
