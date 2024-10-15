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
  min-height: 100vh;
  .content {
    min-height: calc(100vh - 6rem);
    margin: 0;
    padding: 0;
    background-color: var(--color-brand-beige);
  }
`;

export default AppLayout;
