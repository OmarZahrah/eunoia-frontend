import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../assets/styles/breakpoints";

import Modal from "../../components/Modal";
import Logout from "../../components/Logout";

import { LuPencilLine, LuLogOut } from "react-icons/lu";
import { VscLock } from "react-icons/vsc";
import { FaRegHeart, FaRegEnvelope } from "react-icons/fa";
import { BsPersonVcard } from "react-icons/bs";
import { RiDownloadLine } from "react-icons/ri";

function List({ user }) {
  const hasService = user?.hasService;

  return (
    <Wrapper>
      <Modal>
        <ProfileList>
          <li>
            <Link to="/editprofile">
              <LuPencilLine className="icon" />
              <span className="text">Edit Profile</span>
            </Link>
          </li>

          <li>
            <Link to="">
              <VscLock className="icon" />
              <span className="text">Change Password</span>
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              <FaRegHeart className="icon" />
              <span className="text">Favorites</span>
            </Link>
          </li>
          <li>
            <Link
              to={
                hasService ? `/businessProfile/${user._id}` : "/createBusiness"
              }
            >
              <BsPersonVcard className="icon" />
              <span className="text">Business Account</span>
            </Link>
          </li>
          <li>
            <Link to="/requests">
              <FaRegEnvelope className="icon" />
              <span className="text">Requests</span>
            </Link>
          </li>
          <li>
            <Modal.Open opens="logout">
              <Link>
                <LuLogOut className="icon" />
                <span className="text">Logout</span>
              </Link>
            </Modal.Open>
          </li>
          <li>
            <Link>
              <RiDownloadLine className="icon" />
              <span className="text">Download App</span>
            </Link>
          </li>
        </ProfileList>
        <Modal.Window name="logout">{<Logout />}</Modal.Window>
      </Modal>
    </Wrapper>
  );
}

export default List;

const Wrapper = styled.div`
  background: #fef9f0;
  flex: 2;
  padding-left: 2rem;

  ul {
    width: 80%;
    padding: 0;
  }
  @media ${device.tablet} {
    padding: 0 4rem;
  }
  @media ${device.mobile} {
    padding: 0 1rem;
  }
  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #00000040;
  }
`;

const ProfileList = styled.ul`
  @media ${device.tablet} {
    width: 100%;
    padding: 0;
  }

  li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 22px;
    color: var(--color-black-mid);
  }
  .icon {
    width: 1.1rem;
    height: 1.1rem;
  }
  .text {
    padding-left: 20px;
  }
  a {
    display: flex;
    align-items: center;
  }
`;
