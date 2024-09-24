import logo from "../../public/images/png-wordmark-1.png";
import Button from "../components/Button";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function NavBar() {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav((s) => !s);
  };

  return (
    <Wrapper>
      <Link to="/home">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <ul>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
        <li>
          <NavLink to={"/profile"}>Profile</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
      </ul>
      <div className="buttons">
        <NavLink to="/login">
          <Button color="pink" background="transparent" size="small">
            Login
          </Button>
        </NavLink>
        <NavLink to="/signup/user">
          <Button color="white" background="pink" size="small">
            Register
          </Button>
        </NavLink>
      </div>
      <div className={`menu ${openNav ? "openNav" : ""}`}>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/login">
          <Button color="pink" background="transparent" size="small">
            Login
          </Button>
        </NavLink>
        <NavLink to="/signup/user">
          <Button color="white" background="pink" size="small">
            Register
          </Button>
        </NavLink>
      </div>
      {openNav ? (
        <IoClose className="close-icon toggle-icon" onClick={toggleNav} />
      ) : (
        <IoMenu className="menu-icon toggle-icon" onClick={toggleNav} />
      )}
    </Wrapper>
  );
}

export default NavBar;

const Wrapper = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  position: relative;
  .logo {
    width: 10rem;
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 6rem;
    color: #222;
  }
  .active {
    color: #f5b9a7;
  }

  li {
    font-size: 1.2rem;
    transition: transform 0.3s ease;
    color: #949494;
  }
  li:hover {
    transform: scale(1.1);
    color: #f5b9a7;
  }

  .toggle-icon {
    width: 30px;
    height: 30px;
    z-index: 999;
    cursor: pointer;
    display: none;
  }
  .menu {
    height: 100vh;
    width: 70%;
    /* border-left: 1px solid; */
    box-shadow: var(--shadow-lg);
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    right: -100%;
    top: 0;
    z-index: 900;
    background-color: #fff;
    transition: all 0.4s ease;
    &.openNav {
      right: 0;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    ul,
    .buttons {
      display: none;
    }
    .toggle-icon {
      display: inline;
    }
  }
`;
