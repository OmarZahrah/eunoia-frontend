import styled from "styled-components";
import { useGetProviderRequests } from "../../features/requests/useGetProviderRequests";
import RequestsComponent from "./RequestsComponent";

const RecievedRequests = () => {
  const { isLoading: loadingProvider, providerRequests } =
    useGetProviderRequests("serviceProvider");
  return (
    <Wrapper>
      {providerRequests?.map((request) => (
        <RequestsComponent
          request={providerRequests}
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
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding-top: 2rem;
`;
export default RecievedRequests;
