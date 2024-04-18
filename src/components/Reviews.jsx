import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Reviews({ profilePic, name, rate, review }) {
  return (
    <Link to={"/"}>
      <Wrapper>
        <div className="main">
          <img src={profilePic} />
          <div className="information">
            <span className="name">{name}</span>
            <span className="rate">
              <FaStar style={{ color: "#FFF279" }} /> {rate}
            </span>
          </div>
        </div>
        <p className="review">{review}</p>
      </Wrapper>
    </Link>
  );
}

export default Reviews;
const Wrapper = styled.div`
  background-color: white;
  width: 25rem;
  height: 13rem;
  border-radius: 45px 45px 45px 0px;
  padding: 20px;
  margin: 10px 15px 15px 7px;
  box-shadow: 1px 1px 5px #0000002a;

  /* overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background-color: #f0f0f0;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c1c1c1;
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: content-box;
  } */
  /* overflow-x: auto;
  white-space: nowrap; */

  .main {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    border-radius: 50%;
    width: 4rem;
  }
  .information {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-left: 10px;
  }
  .name {
    color: #00000099;
    font-size: 1.25rem;
    font-weight: 500;
  }
  .rate {
    color: #00000099;
    font-size: 1.1rem;
    font-weight: 400;
  }
  .review {
    color: #00000099;
    margin-top: 10px;
  }
`;
