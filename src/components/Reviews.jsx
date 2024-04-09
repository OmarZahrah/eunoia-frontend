import { FaStar } from "react-icons/fa";
import styled from "styled-components";

function Reviews({ profilePic, name, rate, review }) {
  return (
    <Wrapper>
      <img src={profilePic} />
      <p className="name">{name}</p>
      <span className="rate">
        <FaStar style={{ color: "#FFF279" }} /> {rate}
      </span>
      <p className="review">{review}</p>
    </Wrapper>
  );
}

export default Reviews;
const Wrapper = styled.div`
  background-color: white;
  width: 25rem;
  border-radius: 45px 45px 45px 0px;
  padding: 20px;

  img {
    border-radius: 50%;
    width: 4rem;
  }
  .name {
    color: #00000099;
    font-size: 1.3rem;
    font-weight: 500;
  }
  .rate {
    color: #00000099;
    font-size: 1.1rem;
    font-weight: 350;
  }
  .review {
    color: #00000099;
  }
`;
