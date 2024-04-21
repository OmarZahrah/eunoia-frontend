import styled from "styled-components";
import Button from "./Button";
import Star from "./Star";
import StarRating from "./StarRating";

function WriteReview() {
  return (
    <Wrapper>
      <div className="content">
        <h4>Write a Review</h4>
        <p>Score:</p>
        <StarRating />
        <p>Review:</p>
        <textarea />
        <Button size="medium" type="submit" className="post-button">
          Post
        </Button>
      </div>
    </Wrapper>
  );
}

export default WriteReview;
const Wrapper = styled.div`
  width: 35rem;
  height: 25rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  box-shadow: -1px 2px 14px -1px rgba(0, 0, 0, 0.75);

  .content {
    width: 80%;
    /* height: 100%; */
    /* background-color: red; */
  }

  h4 {
    color: rgba(0, 0, 0, 0.642);
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 15px;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.596);
    margin-bottom: 10px;
  }
  textarea {
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: transparent;
    color: rgba(0, 0, 0, 0.656);
    font-size: 16px;
    width: 100%;
    height: 6rem;
    margin-bottom: 20px;
    resize: none;
  }
  .post-button {
    padding: 5px 0;
    width: 100%;
    font-size: 20px;
    margin-bottom: 10px;
  }
`;
