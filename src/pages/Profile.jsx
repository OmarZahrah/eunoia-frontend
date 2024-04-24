import { Outlet, useOutletContext, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useUser } from "../features/userProfile/useUser";
import styled from "styled-components";
import { useService } from "../features/serviceProfile/useService";
import Loading from "../components/Loading";
import { useNavigate } from "react-router";

const Profile = () => {
  const { user, isLoading } = useUser();

  return (
    <Wrapper>
      <NavBar />
      {isLoading ? <Loading /> : <Outlet context={{ user }} />}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #fef9f0;
`;

export default Profile;
