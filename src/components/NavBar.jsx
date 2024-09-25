import logo from "/images/png-wordmark-1.png";
import Button from "../components/Button";
import styled from "styled-components";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import { device } from "../assets/styles/breakpoints";

function NavBar() {
  const route = useLocation()?.pathname;

  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav((prevState) => !prevState);
  };

  return (
    <NavWrapper route={route}>
      <Link to="/home">
        <Logo src={logo} alt="logo" />
      </Link>
      <NavList>
        <NavItem>
          <NavLink to="/categories">Categories</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/profile">Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/search">Search</NavLink>
        </NavItem>
      </NavList>
      <NavButtons>
        <Link to="/login">
          <Button color="pink" background="transparent" size="small">
            Login
          </Button>
        </Link>
        <Link to="/signup/user">
          <Button color="white" background="pink" size="small">
            Register
          </Button>
        </Link>
      </NavButtons>
      <ResponsiveNavList openNav={openNav}>
        <NavItem>
          <NavLink to="/categories">Categories</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/profile">Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/search">Search</NavLink>
        </NavItem>
        <NavItem>
          <Link to="/login">
            <Button color="pink" background="transparent" size="small">
              Login
            </Button>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/signup/user">
            <Button color="white" background="pink" size="small">
              Register
            </Button>
          </Link>
        </NavItem>
      </ResponsiveNavList>
      <ToggleIcon onClick={toggleNav}>
        {openNav ? (
          <IoClose style={{ width: "30px", height: "30px" }} />
        ) : (
          <IoMenu style={{ width: "30px", height: "30px" }} />
        )}
      </ToggleIcon>
    </NavWrapper>
  );
}

export default NavBar;

const NavWrapper = styled.nav`
  background-color: ${({ route }) =>
    route === "/welcome" ? "#fff" : "var(--color-brand-beige)"};

  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 0 2rem;
`;

const Logo = styled.img`
  width: 10rem;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  color: #222;
  transition: all 0.4s ease;
  padding: 0;

  @media ${device.tablet} {
    display: none;
  }
`;

const NavItem = styled.li`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  color: #949494;

  &:hover {
    transform: scale(1.1);
    color: #f5b9a7;
  }

  @media ${device.tablet} {
    margin: 1rem 0;
  }

  & > .active {
    color: var(--color-brand-pink);
  }
`;

const NavButtons = styled.div`
  display: flex;
  gap: 1rem;

  @media ${device.tablet} {
    display: none;
  }
`;

const ToggleIcon = styled.div`
  width: 30px;
  height: 30px;
  z-index: 999;
  cursor: pointer;
  display: none;

  @media ${device.tablet} {
    display: inline;
  }
`;

const ResponsiveNavList = styled.ul`
  position: absolute;
  top: 5rem;
  right: ${({ openNav }) => (openNav ? "0" : "-100%")};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0;
  color: #222;
  transition: all 0.4s ease;

  background-color: #fff;
  box-shadow: var(--shadow-lg);
  z-index: 999;
`;
