import styled from "styled-components";
import { useGetProviderRequests } from "../../features/requests/useGetProviderRequests";
import Loading from "../Loading";
import RequestCard from "../RequestCard";

const ReceivedRequests = () => {
  const { isLoading, providerRequests } =
    useGetProviderRequests("serviceProvider");

  if (isLoading) return <Loading />;
  return (
    <Wrapper>
      {providerRequests?.map((request) => (
        <RequestCard key={request._id} data={request} role={"provider"} />
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding-top: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
export default ReceivedRequests;
