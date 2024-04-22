import { Outlet, useOutletContext, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useUser } from "../features/userProfile/useUser";
import styled from "styled-components";
import { useService } from "../features/serviceProfile/useService";
import Loading from "../components/Loading";
import { useNavigate } from "react-router";

const Profile = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useUser();
  console.log(user);
  // const { id } = useParams();
  if (user === null) navigate("/login", { replace: true });

  // const { service, isLoading: serviceLoading } = useService(id);
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
