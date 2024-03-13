import { Link } from "react-router-dom";
import styled from "styled-components";
import { LuPencilLine, LuLogOut } from "react-icons/lu";
import { VscLock } from "react-icons/vsc";
import { FaRegHeart, FaRegEnvelope } from "react-icons/fa";
import { BsPersonVcard } from "react-icons/bs";
import { RiDownloadLine } from "react-icons/ri";

function List({ serviceId }) {
  const hasService = true;
  // const hasService = false;
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="editprofile">
            <LuPencilLine className="icons" />
            <span>Edit Profile</span>
          </Link>
        </li>

        <li>
          <Link to="">
            <VscLock className="icons" />
            <span>Change Password</span>
          </Link>
        </li>
        <li>
          <Link to="">
            <FaRegHeart className="icons" />
            <span>Favorites</span>
          </Link>
        </li>
        <li>
          <Link to={hasService ? `businessProfile/${serviceId}` : "business"}>
            <BsPersonVcard className="icons" />
            <span>Business Account</span>
          </Link>
        </li>
        <li>
          <Link to="">
            <FaRegEnvelope className="icons" />
            <span>Requests</span>
          </Link>
        </li>
        <li>
          <Link to="/welcome">
            <LuLogOut className="icons" />
            <span>Logout</span>
          </Link>
        </li>
        <li>
          <Link to="">
            <RiDownloadLine className="icons" />
            <span>Download App</span>
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
}

export default List;

const Wrapper = styled.div`
  width: 70%;
  ul {
    margin-top: 2rem;
    /* border-left: 1px solid; */
  }
  li {
    /* display: flex;
    align-items: center; */
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 22px;
    width: 60%;
    color: rgba(0, 0, 0, 0.593);
  }
  .icons {
    width: 1.1rem;
    height: 1.1rem;
  }
  span {
    padding-left: 20px;
  }
  a {
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
    width: 70%;
    li {
      width: 70%;
      padding: 1rem;
      font-size: 0.9rem;
    }
    ul {
      margin-top: 0rem;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
    width: 70%;
    li {
      width: 70%;
      padding: 1rem;
      font-size: 0.9rem;
    }
    ul {
      margin-top: 0rem;
    }
  }

  @media only screen and (max-width: 52.5em) {
  }

  @media only screen and (max-width: ${({ theme }) => theme.small}) {
    width: 50%;
    li {
      width: 90%;
      padding: 0.9rem;
      font-size: 0.9rem;
    }
    ul {
      margin-top: 0.9rem;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
    li {
      width: 94%;
    }
    ul {
      margin-bottom: 2rem;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    li {
      width: 88%;
    }
    ul {
      margin-bottom: 2rem;
    }
  }
`;
