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
      <nav>
        <Link to="/welcome">
          <img className="Hlogo" src={logo} />
        </Link>

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
    width: 80%;
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
    padding-left: 17rem;
  }
  .active {
    color: #f5b9a7;
  }
  li {
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }

  li:hover {
    transform: scale(1.1);
    color: #f5b9a7;
  }
  .logbutton {
    margin-left: 10rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
    color: black;
  }

  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
    color: black;
  }

  @media only screen and (max-width: 52.5em) {
    color: black;
  }

  @media only screen and (max-width: ${({ theme }) => theme.small}) {
    ul {
      padding-left: 12rem;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    color: black;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    color: black;
  }
`;
