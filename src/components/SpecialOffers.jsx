import { Link } from "react-router-dom";
import styled from "styled-components";

function SpecialOffers({ link, backgroundImage, percentage, title, category }) {
  return (
    <Link to={link}>
      <Wrapper backgroundImage={backgroundImage}>
        <h1>{percentage}</h1>
        <span className="title">{title}</span>
        <div className="div">
          <p>{category}</p>
          <span className="view">View Details</span>
        </div>
      </Wrapper>
    </Link>
  );
}

export default SpecialOffers;
const Wrapper = styled.div`
  width: 27rem;
  height: 12rem;
  background: ${({ backgroundImage }) => `url(${backgroundImage})`};
  border-radius: 25px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  padding-left: 10px;
  padding-bottom: 10px;
  .title {
    font-size: 23px;
    color: #fff !important;
  }
  p {
    font-size: 17px;
    line-height: 17.82px;
    padding-bottom: 7px;
  }
  .div {
    display: flex;
    justify-content: space-between;
  }
  .view {
    text-decoration: underline;
    padding-right: 10px;
    text-underline-offset: 4px;
  }
`;
