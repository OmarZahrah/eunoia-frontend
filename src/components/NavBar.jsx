import logo from "../../public/images/png-wordmark-1.png";
import Button from "../components/Button";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
function NavBar({ showLoginButton = false, showRegisterButton = false }) {
  const activePaths = ["/profile", "/editprofile", "/createbusiness"];
  const location = useLocation();
  const isActive = activePaths.includes(location.pathname) ? "active" : "";
  return (
    <Wrapper>
      <Link to="/welcome">
        <img className="Hlogo" src={logo} />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="">Categories</Link>
          </li>
          <li className={isActive}>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="">Search</Link>
          </li>
        </ul>
        <div className="buttons">
          {showLoginButton && (
            <Link to="/login">
              <Button color="pink" background="transparent" size="small">
                Login
              </Button>
            </Link>
          )}
          {showRegisterButton && (
            <Link to="/signup/user">
              <Button color="white" background="pink" size="small">
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
  display: flex;
  /* height: 6rem; */
  padding: 1rem 4rem;
  border-bottom: 1px solid #ccc;
  nav {
    display: flex;
    width: 100%;
    align-items: center;
    /* position: fixed; */
  }
  .Hlogo {
    width: 10rem;
    height: auto;
  }
  ul {
    width: 100%;
    display: flex;
    gap: 6rem;
    color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    padding: 0;
    /* padding-left: 9rem; */
  }
  .active {
    color: #f5b9a7;
  }
  li {
    font-size: 1.2rem;
    transition: transform 0.3s ease;
    display: flex;
    align-items: center;
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
