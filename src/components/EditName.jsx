import styled from "styled-components";
import { LuPencilLine } from "react-icons/lu";

function EditName() {
  return (
    <Wrapper>
      <div>
        <p>Edit Profile</p>
        <label>NAME</label>
        <input type="text" placeholder="Your Name" />
        <LuPencilLine className="icons" />
        <label>EMAIL</label>
        <input type="text" placeholder="Your Email" />
        <LuPencilLine className="icons" />
      </div>
    </Wrapper>
  );
}

export default EditName;
const Wrapper = styled.div`
  width: 70%;
  padding-left: 2rem;
  p {
    font-size: 30px;
    color: rgba(0, 0, 0, 0.593);
    font-weight: bold;
    letter-spacing: 0.2cap;
    margin: 1.5rem 0 1.5rem 0;
  }
  label {
    display: block;
    font-size: 23px;
    color: rgba(0, 0, 0, 0.593);
    margin-bottom: 0.5rem;
  }
  input {
    margin-bottom: 2rem;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    width: 70%;
    height: 30px;
    color: rgba(0, 0, 0, 0.593);
    font-size: 17px;
  }
  input:focus {
    /* border: none; */
    outline: none;
    border-bottom: 1px solid #f5b9a7;
    /* box-shadow: 5px 5px 5px #f5b9a7; */
    box-shadow: 0 7px 5px -8px #f5b9a7;
  }

  .icons {
    color: rgba(0, 0, 0, 0.593);
    width: 1.1rem;
    height: 1.1rem;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    p {
      font-size: 1.7rem;
    }
    label {
      font-size: 1.3rem;
    }
    input {
      font-size: 1rem;
      margin-top: 0.7rem;
      padding-bottom: 1.1rem;
      height: 2.5rem;
      width: 85%;
    }
    .icons {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
    p {
      font-size: 1.7rem;
    }
    label {
      font-size: 1.2rem;
    }
    input {
      font-size: 1rem;
      margin-top: 0.5rem;
      padding-bottom: 0.7rem;
      height: 2.1rem;
      width: 100%;
    }
    .icons {
      width: 1rem;
      height: auto;
    }
  }
  @media only screen and (max-width: 52.5em) {
    width: 60%;
    p {
      font-size: 1.5rem;
    }
    label {
      font-size: 1.1rem;
    }
    input {
      font-size: 0.8rem;
      margin-top: 0rem;
      padding-bottom: 0.4rem;
      height: 1.5rem;
      width: 80%;
    }
    .icons {
      width: 1rem;
      height: auto;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
    p {
      font-size: 1.7rem;
    }
    label {
      font-size: 1.1rem;
    }
    input {
      font-size: 0.8rem;
      margin-top: 0rem;
      padding-bottom: 0.4rem;
      height: 1.5rem;
      width: 80%;
    }
    .icons {
      width: 1rem;
      height: auto;
    }
  }
`;
