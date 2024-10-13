import styled from "styled-components";

import ProfilePic from "../../components/ProfilePic";
import List from "../../components/List";

import { useOutletContext } from "react-router-dom";
import { device } from "../../assets/styles/breakpoints";

function Profile() {
  const { user } = useOutletContext();
  return (
    <Wrapper>
      <div className="container">
        <ProfilePic user={user} />
        <List user={user} />
      </div>
    </Wrapper>
  );
}

export default Profile;

const Wrapper = styled.div`
  min-height: 100vh;
  background: #fef9f0;
  .container {
    display: flex;
    padding-top: 20px;
  }

  @media ${device.tablet} {
    height: auto;
    .container {
      display: flex;
      flex-direction: column;
      margin-top: 0px;
    }
  }
  @media ${device.mobile} {
    width: 100%;
    height: 100vh;
    .container {
      display: flex;
      flex-direction: column;
      margin-top: 0px;
    }
  }
`;
