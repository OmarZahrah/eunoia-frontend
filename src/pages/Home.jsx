import { useUser } from "../features/signup/useUser";
import { useUserContext } from "../context/UserContext";
import NavBar from "../components/NavBar";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import Loading from "../components/Loading";
import { useService } from "../features/signup/useService";
const Home = () => {
  const { user, isLoading } = useUser();
  return (
    <Wrapper>
      <NavBar userId={user?._id} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Link to={`/venueprofile/${user._id}`}>
            <div className="venu">
              <p>Venu</p>
            </div>
          </Link>
        </>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #fef9f0;
  .venu {
    width: 3rem;
    height: 3rem;
    background-color: gray;
    margin: 2rem auto;
  }
`;
export default Home;
