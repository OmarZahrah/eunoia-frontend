import logo from "../../public/images/png-wordmark-1.png";
import Button from "../components/Button";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function NavBar({
  showLoginButton = false,
  showRegisterButton = false,
  userId,
}) {
  const [openNav, setOpenNav] = useState(false);
  const location = useLocation();

  const checkIsActive = (path) => location.pathname === path;

  const toggleNav = () => {
    setOpenNav((s) => !s);
  };

  return (
    <Wrapper>
      <Link to="/welcome">
        <img className="Hlogo" src={logo} alt="logo" />
      </Link>
      <nav className={openNav ? "open-nav" : ""}>
        <ul>
          <li className={checkIsActive("/categories") ? "active" : ""}>
            <Link to="/categories">Categories</Link>
          </li>
          <li className={checkIsActive("/profile") ? "active" : ""}>
            <Link to={`/profile/${userId}`}>Profile</Link>
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
      {openNav ? (
        <IoClose className="close-icon" onClick={toggleNav} />
      ) : (
        <IoMenu className="menu-icon" onClick={toggleNav} />
      )}
    </Wrapper>
  );
}

export default NavBar;

const Wrapper = styled.div`
  display: flex;
  /* height: 6rem; */
  padding: 1rem 4rem;
  border-bottom: 1px solid #ccc;
  align-items: center;
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
    display: flex;
    width: 100%;
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
  .menu-icon {
    display: none;
    width: 30px;
    height: 30px;
    margin-left: auto;
    z-index: 100;
  }
  .close-icon {
    display: none;
    width: 30px;
    height: 30px;
    margin-left: auto;
    z-index: 100;
    position: absolute;
    top: 10px;
    right: 10px;
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
  @media only screen and (max-width: ${({ theme }) => theme.small}) {
    ul {
      gap: 8rem;
      /* padding-left: 4rem; */
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
    ul {
      gap: 7rem;
      /* padding-left: 3rem; */
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    ul {
      gap: 5rem;
      /* padding-left: 1rem; */
    }
  }
  @media only screen and (max-width: 52.5em) {
    width: 100%;
    justify-content: space-between;
    ul {
      gap: 5rem;
      /* padding-left: 1rem; */
    }
    nav {
      display: none;
    }
    .open-nav {
      /* display: none; */
      display: flex !important;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      flex-direction: column;
      z-index: 10;
      background-color: #fff;
      align-items: center;
      justify-content: center;
      transition: 0.3s ease;
    }
    ul {
      flex-direction: column;
      z-index: 11;
      align-items: center;
      justify-content: center;
    }
    li {
      font-size: 2.4rem;
    }
    .menu-icon {
      display: block;
      width: 30px;
      height: 30px;
      margin-left: auto;
    }
    .close-icon {
      display: block;
    }
    .buttons {
      margin-top: 5px;
      flex-direction: column;
      gap: 10px;
    }
    .buttons button {
      font-size: 2.4rem;
      width: 100%;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
  }
`;
