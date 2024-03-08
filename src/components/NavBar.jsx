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
  /* height: 6rem; */
  padding: 1rem 4rem;
  border-bottom: 1px solid #ccc;
  nav {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    /* position: fixed; */
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
    color: #f5b9a7;
  }
  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 50%; */
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    ul {
      gap: 5rem;
      /* padding-left: 1rem; */
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    ul {
      gap: 5rem;
      /* padding-left: 1rem; */
    }
  }
  @media only screen and (max-width: 52.5em) {
    ul {
      gap: 6rem;
      /* padding-left: 2rem; */
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
    ul {
      gap: 7rem;
      /* padding-left: 3rem; */
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.small}) {
    ul {
      gap: 8rem;
      /* padding-left: 4rem; */
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
    ul {
      gap: 9rem;
      /* padding-left: 5rem; */
    }
    li {
      font-size: 1.1rem;
    }
  }
`;