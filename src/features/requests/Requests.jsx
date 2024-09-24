import NavBar from "../../components/NavBar";
import styled from "styled-components";
import RequestsComponent from "../../components/RequestsComponent";
import { useGetUserRequest } from "./useGetUserRequest";
import Loading from "../../components/Loading";
import { useGetProviderRequests } from "./useGetProviderRequests";

function Requests() {
  const { isLoading: loadingUser, userRequests } = useGetUserRequest();
  const { isLoading: loadingProvider, providerRequests } =
    useGetProviderRequests("serviceProvider");
  // console.log("user", userRequests);
  // console.log("provider", providerRequests);

  if (loadingProvider || loadingUser) return <Loading />;
  return (
    <Wrapper>
      <NavBar />
      <div className="request-container">
        <p className="title">Requests</p>
        <div className="components">
          {/* <RequestsComponent
            dateNumber="29"
            dateMonth="Dec 2024"
            day="Tue"
            time="5:00 PM"
            noteText="Location will be in Ismailia in Mercure"
          /> */}
          {providerRequests?.map((request) => (
            <RequestsComponent
              key={request._id}
              id={request._id}
              date={request.bookingDate}
              price={request.totalPriceAfterDiscount}
              Notes={request.Notes}
              role="provider"
              status={request.status}
              // status='declined'
            />
          ))}
          {userRequests?.map((request) => (
            <RequestsComponent
              request={request}
              key={request._id}
              id={request._id}
              price={request.totalPriceAfterDiscount}
              Notes={request.Notes}
              role="user"
              status={request.status}
              date={request.bookingDate}
              // status='declined'
            />
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
    font-family: Literata;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 7.016rem;
    letter-spacing: 0.25rem;
    text-align: center;
    color: #00000099;
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

  .components > * {
    /* width: calc(50% - 20px); */
    /* margin: 5px; */
  }

  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
    .components > * {
      /* width: calc(60% - 20px); */
    }
    .title {
      font-size: 2.1rem;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    .title {
      font-size: 2rem;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0;
    .title {
      font-size: 2rem;
    }
  }
`;

export default Requests;
