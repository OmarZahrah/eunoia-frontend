import { Link } from "react-router-dom";
import styled from "styled-components";
import { LuPencilLine, LuLogOut } from "react-icons/lu";
import { VscLock } from "react-icons/vsc";
import { FaRegHeart, FaRegEnvelope } from "react-icons/fa";
import { BsPersonVcard } from "react-icons/bs";
import { RiDownloadLine } from "react-icons/ri";

function List() {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/editprofile">
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
          <Link to="/createbusiness">
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
  li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.347);
    padding: 22px;
    width: 60%;
    color: rgba(0, 0, 0, 0.593);

    /* font-family: Literata; */
  }
  span {
    padding-left: 20px;
  }
  ul {
    margin-top: 10px;
    /* border-left: 1px solid; */
  }
  .icons {
    width: 1.1rem;
    height: 1.1rem;
  }
`;
