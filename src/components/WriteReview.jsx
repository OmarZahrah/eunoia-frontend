import styled from "styled-components";
import Button from "./Button";
import StarRating from "./StarRating";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useAddReview } from "../features/review/useAddReview";

function WriteReview({ serviceId, isOpenModal, setIsOpenModal }) {
  const { handleSubmit, register } = useForm();
  const [rating, setRating] = useState(0);
  const { addReview, isLoading } = useAddReview();

  useEffect(
    function () {
      if (isOpenModal && !isLoading) {
        setIsOpenModal(false);
      }
    },
    [setIsOpenModal, isOpenModal, isLoading]
  );

  const onSubmit = (formData) => {
    const data = { ratings: rating, ...formData };
    addReview({ serviceId: serviceId, data: data });
  };

  return (
    <Wrapper>
      <form className="content" onSubmit={handleSubmit(onSubmit)}>
        <h4>Write a Review</h4>
        <p>Score:</p>
        <StarRating rating={rating} setRating={setRating} />
        <p>Review:</p>
        <textarea {...register("title")} />
        <Button
          size="medium"
          type="submit"
          className="post-button"
          disabled={isLoading}
        >
          {isLoading ? "Posting..." : "Post"}
        </Button>
      </form>
    </Wrapper>
  );
}

export default WriteReview;
const Wrapper = styled.div`
  z-index: 3;
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
    text-align: center;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  p {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.596);
    font-size: 20px;
    margin-bottom: 10px;
  }

  textarea {
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: transparent;
    color: rgba(0, 0, 0, 0.656);
    resize: none;
    font-size: 16px;
    width: 100%;
    height: 6rem;
    margin-bottom: 20px;
    padding: 5px;
  }
  textarea:focus {
    outline: none;
  }
  .post-button {
    width: 100%;
    margin-bottom: 10px;
    padding: 5px 0;
    font-size: 20px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
    width: 32rem;
    height: 23rem;
    h4 {
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 8px;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
    width: 30rem;
    height: 20rem;
    h4 {
      font-size: 25px;
      margin-bottom: 0px;
    }
    p {
      font-size: 19px;
      margin-bottom: 5px;
    }
    textarea {
      font-size: 15px;
      width: 100%;
      height: 5rem;
      margin-bottom: 15px;
    }

    .post-button {
      padding: 4px 0;
      font-size: 19px;
    }
  }
  @media only screen and (max-width: 52.5em) {
    h4 {
      font-size: 24px;
    }
    p {
      font-size: 18px;
      margin-bottom: 4px;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    width: 27rem;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 20rem;
    height: 22rem;

    h4 {
      font-size: 25px;
      margin-bottom: 10px;
    }
    p {
      font-size: 20px;
      margin-bottom: 7px;
    }
  }
`;
