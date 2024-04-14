import NavBar from "../components/NavBar";
import styled from "styled-components";
import SpecialOffers from "../components/SpecialOffers";
import ring from "../images/ring.png";
import DetailsCard from "../components/DetailsCard";
import man from "../images/man.png";
import table from "../images/table.png";
import { useGetServices } from "../features/categories/useGetServices";
import Loading from "../components/Loading";
import { useUser } from "../features/signup/useUser";
import { useGetNearby } from "../features/homepage/useGetNearby";
const Home = () => {
  const { user, isLoading } = useUser();
  console.log(Boolean(user));
  const { nearbyServices } = useGetNearby();
  // const isLoading = false;

  if (isLoading) return <Loading />;
  return (
    <Wrapper>
      <NavBar showLoginButton={!user} showRegisterButton={!user} />
      <div className="container">
        {/* <h1>Hey, Name!</h1> */}
        <p className="titles">Special Offers</p>
        <div className="packages-container">
          <SpecialOffers
            backgroundImage={ring}
            percentage={"-20%"}
            title={"Karim Roshdy"}
            category={"Photographer"}
            link={"/"}
          />
          <SpecialOffers
            backgroundImage={ring}
            percentage={"-20%"}
            title={"Karim Roshdy"}
            category={"Photographer"}
            link={"/"}
          />
          <SpecialOffers
            backgroundImage={ring}
            percentage={"-20%"}
            title={"Karim Roshdy"}
            category={"Photographer"}
            link={"/"}
          />
          <SpecialOffers
            backgroundImage={ring}
            percentage={"-20%"}
            title={"Karim Roshdy"}
            category={"Photographer"}
            link={"/"}
          />
          <SpecialOffers
            backgroundImage={ring}
            percentage={"-20%"}
            title={"Karim Roshdy"}
            category={"Photographer"}
            link={"/"}
          />
        </div>
        <p className="titles">Popular</p>
        <div className="packages-container">
          <DetailsCard
            image={man}
            title={"Amr Abdallah"}
            description={"Photographer"}
            width={185}
            height={160}
          />
          <DetailsCard
            image={man}
            title={"Amr Abdallah"}
            description={"Photographer"}
            width={185}
            height={160}
          />
          <DetailsCard
            image={man}
            title={"Amr Abdallah"}
            description={"Photographer"}
            width={185}
            height={160}
          />
          <DetailsCard
            image={man}
            title={"Amr Abdallah"}
            description={"Photographer"}
            width={185}
            height={160}
          />
          <DetailsCard
            image={man}
            title={"Amr Abdallah"}
            description={"Photographer"}
            width={185}
            height={160}
          />
          <DetailsCard
            image={man}
            title={"Amr Abdallah"}
            description={"Photographer"}
            width={185}
            height={160}
          />
          <DetailsCard
            image={man}
            title={"Amr Abdallah"}
            description={"Photographer"}
            width={185}
            height={160}
          />
          <DetailsCard
            image={man}
            title={"Amr Abdallah"}
            description={"Photographer"}
            width={185}
            height={160}
          />
          <DetailsCard
            image={man}
            title={"Amr Abdallah"}
            description={"Photographer"}
            width={185}
            height={160}
          />
        </div>
        {nearbyServices && (
          <>
            <p className="titles">
              Nearby
              <span className="service-location">
                ({nearbyServices[0]?.location})
              </span>
            </p>
            <div className="packages-container">
              {nearbyServices?.map((nearbyService) => (
                <DetailsCard
                  id={nearbyService._id}
                  key={nearbyService._id}
                  image={nearbyService.imageCover}
                  title={nearbyService.businessName}
                  description={nearbyService.businessCategory}
                  width={330}
                  height={180}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </Wrapper>
  );
};
export default Home;

const Wrapper = styled.div`
  background-color: #fef9f0;
  min-height: 100vh;
  .container {
    margin: 0 1.5rem;
  }
  .titles {
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: rgba(0, 0, 0, 0.677);
    margin: 15px 0;
  }
  .packages-container {
    display: flex;
    gap: 1.2rem;
    overflow-x: auto;
    height: 220px;
    /* white-space: nowrap; */
    /* justify-content: space-evenly; */
  }
  .packages-container::-webkit-scrollbar-thumb {
    background-color: #d4d4d4;
    border-radius: 10px;
    cursor: pointer;
  }
  .packages-container::-webkit-scrollbar {
    height: 0.5rem;
  }
  .service-location {
    font-size: 14px;
    color: #a19d9d;
  }
`;
