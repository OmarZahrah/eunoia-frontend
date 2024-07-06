import styled from "styled-components";
import { useLogout } from "../features/Auth/useLogout";

const Logout = ({ setLogout }) => {
  const { logout, isLoading } = useLogout();
  return (
    <Wrapper>
      <p>Logout of your account?</p>
      <div className="buttons">
        <button
          className="confirm"
          disabled={isLoading}
          onClick={() => logout()}
        >
          Yes
        </button>
        <button
          className="cancel"
          onClick={() => setLogout(false)}
          disabled={isLoading}
        >
          Cancel
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 30rem;
  height: 13rem;
  background-color: #fef9f0;
  /* margin: auto; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 2rem 4rem;
  border-radius: 15px;
  position: absolute;
  top: 50%;
  right: 50%;
  /* left: 0; */
  /* bottom: 0; */
  transform: translate(50%, -50%);
  box-shadow: -1px 2px 14px -1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 2px 14px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 2px 14px -1px rgba(0, 0, 0, 0.75);
  z-index: 10;
  p {
    color: #555;
  }
  .buttons {
    display: flex;
    gap: 30px;
  }
  button {
    border: none;
    width: 7rem;
    height: 2rem;
    padding: 5px 10px;
    color: #fff;
    border-radius: 100px;
  }
  .confirm {
    background-color: #74ab70;
  }
  .confirm:hover {
    background-color: #669762;
  }
  .cancel {
    background-color: #e92727;
  }
  .cancel:hover {
    background-color: #d42f2f;
  }

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
  }
`;

export default Logout;
