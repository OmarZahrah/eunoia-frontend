import styled from "styled-components";
import { useGetUserRequest } from "./useGetUserRequest";
import Loading from "../../components/Loading";
import RequestCard from "../../components/RequestCard";
import { device } from "../../assets/styles/breakpoints";

function Requests() {
  const { isLoading: loadingUser, userRequests } = useGetUserRequest();
  if (loadingUser) return <Loading />;
  return (
    <Wrapper>
      <div className="request-container">
        <p className="title">Requests</p>
        <div className="components">
          {userRequests?.map((request) => (
            <RequestCard key={request._id} data={request} role={"user"} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fef9f0;
  min-height: 100vh;
  overflow-x: hidden;
  padding: 0 2rem;

  .title {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 7.016rem;
    letter-spacing: 0.25rem;
    text-align: center;
    color: var(--color-black-mid);
    padding: 0 2rem;
    position: relative;
  }

  .components {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    margin: 0 auto;
    gap: 2rem;
  }

  @media ${device.tablet} {
    .title {
      font-size: 2rem;
    }
  }
  @media ${device.mobile} {
    padding: 0;
  }
`;

export default Requests;
