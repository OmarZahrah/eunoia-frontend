import logo from "../../public/images/png-wordmark-1.png";
import Button from "../components/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
function NavBar({ showLoginButton = false, showRegisterButton = false }) {
  return (
    <Wrapper>
      <nav>
        <img className="Hlogo" src={logo} />
        <ul>
          <li>
            <Link to="">Categories</Link>
          </li>
          <li>
            <Link to="">Profile</Link>
          </li>
          <li>
            <Link to="">Search</Link>
          </li>
        </ul>
        <div className="buttons">
          {showLoginButton && (
            <Link to="/login">
              <Button
                className="logbutton"
                color="pink"
                background="transparent"
                size="small"
              >
                Login
              </Button>
            </Link>
          )}
          {showRegisterButton && (
            <Link to="/signup/user">
              <Button
                className="regbutton"
                color="white"
                background="pink"
                size="small"
              >
                Register
              </Button>
            </Link>
          )}
        </div>
      </nav>
    </Wrapper>
  );
}

export default NavBar;

const Wrapper = styled.div`
  /* height: 100vh; */
  /* gap: 1rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  

  nav {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    width: 90%;
    padding-top: 1rem;
    /* border-bottom: 0.01rem solid; */
  }
  .Hlogo {
    width: 9.3rem;
    height: 2.2rem;
    flex-shrink: 0;
  }
  ul {
    display: flex;
    flex-direction: row;
    gap: 5rem;
    color: rgba(0, 0, 0, 0.5);
    padding-left: 18.9rem;
  }
  li {
    font-size: 1.1rem;
    transition: transform 0.3s ease;
  }

  li:hover {
    transform: scale(1.1);
    color: var(--pink, #f5b9a7);
  }
  .logbutton {
    margin-left: 10rem;
  }





  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    /* Media query for tablet-sized screens */
    /* Adjust NavBar styles for tablet-sized screens */
    nav {
      flex-direction: column;
      align-items: flex-start;
    }
    
    ul {
      display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
      flex-direction: column;
      gap: 1rem;
      padding-left: 0;
      margin-top: 1rem;
    }
    
    li {
      font-size: 1.2rem;
      padding-left: 1rem;
    }

    .Hlogo {
      margin-left: 1rem; /* Add margin to logo */
    }

    .buttons {
      display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
      flex-direction: column;
      gap: 1rem;
      margin-top: 1rem;
      padding-left: 1rem; /* Add padding for consistency */
    }
  }


`;



