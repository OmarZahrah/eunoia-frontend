import NavBar from "../components/NavBar";
import styled from "styled-components";
import ProfilePic from "../components/ProfilePic";
import EditName from "../components/EditName";

function EditProfile() {
  return (
    <Wrapper>
      <NavBar />
      <div className="container">
        <ProfilePic />
        <EditName />
      </div>
    </Wrapper>
  );
}

export default EditProfile;

const Wrapper = styled.div`
  height: 100vh;
  background: #fef9f0;
  .container {
    display: flex;
    margin-top: 20px;
    /* padding: 20px; */
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;

    /*height: 60rem; */
    /* width: 30rem; */

    .container {
      display: flex;
      flex-direction: column;
      /* width: 10rem; */
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
    /* height: auto; */
    .container {
      display: flex;
      flex-direction: column;
      margin-top: 0px;
    }
  }
`;
