import styled from "styled-components";
import { useLogout } from "../features/Auth/useLogout";

const StyledBox = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  background-color: #fef9f0;
  padding: 3.2rem 4rem;

  h3 {
    color: var(--color-black-mid);
  }

  p {
    color: #555;
    margin-bottom: 1.2rem;
  }

  div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Button = styled.button`
  border: none;
  width: 7rem;
  height: 2rem;
  padding: 5px 10px;
  color: #fff;
  border-radius: 100px;

  &.confirm {
    background-color: #74ab70;
    &:hover {
      background-color: #669762;
    }
  }
  &.cancel {
    background-color: #e92727;
    &:hover {
      background-color: #d42f2f;
    }
  }
`;

const Logout = ({ onCloseModal }) => {
  const { logout, isLoading } = useLogout();
  return (
    <StyledBox>
      <h3>Logout</h3>
      <p>Are You Sure You Want To Logout ?</p>

      <div>
        <Button
          className="confirm"
          disabled={isLoading}
          onClick={() => logout()}
        >
          Yes
        </Button>
        <Button
          className="cancel"
          onClick={() => onCloseModal()}
          disabled={isLoading}
        >
          Cancel
        </Button>
      </div>
    </StyledBox>
  );
};

export default Logout;
