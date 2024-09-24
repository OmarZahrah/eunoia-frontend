import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/NavBar";

const AppLayout = () => {
  return (
    <Wrapper>
      <NavBar />
      <div className="content">
        <Outlet />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1366px;
  margin: 0 auto !important;
  padding: 0 20px;
  .content {
    min-height: calc(100vh - 5rem);
  }
`;

export default AppLayout;
