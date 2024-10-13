import styled from "styled-components";
import logo from "../../../public/logo-1.png";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { device } from "../../assets/styles/breakpoints";

const CreateAccount = () => {
  return (
    <Wrapper>
      <Box>
        <img src={logo} />
        <p> Create account as a</p>
        <Buttons>
          <Link to="businessForm" className="link">
            <Button size="medium" className="provider-button">
              Service Provider
            </Button>
          </Link>
          <Link to="/home" className="link">
            <Button
              className="user-button"
              size="medium"
              background="transparent"
              border="green"
              color="green"
            >
              User
            </Button>
          </Link>
        </Buttons>
      </Box>
    </Wrapper>
  );
};

export default CreateAccount;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--beige, #fef9f0);
  height: 100vh;
`;

const Box = styled.div`
  width: 80%;
  height: 80%;
  background: #ffffffe5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 3rem 0;
  img {
    width: 2.625rem;
    height: 2.813rem;
  }
  p {
    color: var(--text, rgba(0, 0, 0, 0.6));
    text-align: center;
    font-family: Koh Santepheap;
    font-size: 2.25rem;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.00625rem;
  }

  @media ${device.mobile} {
    width: 100%;
    height: 100%;
  }
`;

const Buttons = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media ${device.mobile} {
    width: 100%;
    .link {
      width: 90%;
    }
    Button {
      width: 100%;
    }
  }
`;
