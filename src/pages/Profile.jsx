import NavBar from "../components/NavBar";
import styled from "styled-components";
import ProfilePic from "../components/ProfilePic";
import List from "../components/List";

function Profile() {
  return (
    <Wrapper>
      <NavBar />
      <div className="container">
        <ProfilePic />
        <List />
      </div>
    </Wrapper>
  );
}

export default Profile;

const Wrapper = styled.div`
  height: 100vh;
  background: #fef9f0;
  .container {
    display: flex;
    margin-top: 20px;
    /* padding: 20px; */
  }
  /* @media only screen and (max-width: ${({ theme }) => theme.mid}) {
  } */

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    /* width: 100%; */
    height: auto;
    .container {
      display: flex;
      flex-direction: column;
      margin-top: 0px;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    height: 100vh;
    .container {
      display: flex;
      flex-direction: column;
      margin-top: 0px;
    }
  }
  @media only screen and (max-width: 52.5em) {
    .container {
      /* width: 65%; */
    }
  }
`;
