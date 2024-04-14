import { Outlet, useOutletContext, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useUser } from "../features/signup/useUser";
import styled from "styled-components";
import { useService } from "../features/signup/useService";
import Loading from "../components/Loading";
import { useNavigate } from "react-router";

const Profile = () => {
  const navigate = useNavigate();
  const { user, isLoading, unauthorized } = useUser();
  // const { id } = useParams();
  if (unauthorized) navigate("/login", { replace: true });

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
