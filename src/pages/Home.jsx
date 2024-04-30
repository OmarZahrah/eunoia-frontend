import NavBar from "../components/NavBar";
import styled from "styled-components";
import SpecialOffers from "../components/SpecialOffers";
import ring from "../images/ring.png";
import DetailsCard from "../components/DetailsCard";
import man from "../images/man.png";
import Loading from "../components/Loading";
import { useUser } from "../features/userProfile/useUser";
import { useGetNearby } from "../features/homepage/useGetNearby";
import ScrollSection from "../components/ScrollSection";
import { useGetServices } from "../features/categories/useGetServices";

const Home = () => {
  const { user, isLoading } = useUser();
  const { nearbyServices } = useGetNearby();
  const { allServices: topPhotographers } = useGetServices([
    { category: "photographers" },
    { limit: 10 },
    { sort: "-ratingsAverage" },
  ]);
  const { allServices: topVenues } = useGetServices([
    { category: "Venues" },
    { limit: 10 },
    { sort: "-ratingsAverage" },
  ]);
  const { allServices: topMakeupArtists } = useGetServices([
    { category: "Makeup Artists" },
    { limit: 10 },
    { sort: "-ratingsAverage" },
  ]);
  return (
    <Wrapper>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NavBar />
          <div className="container">
            <p className="titles">Special Offers</p>
            <ScrollSection>
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
            </ScrollSection>
            <p className="titles">Popular</p>
            <ScrollSection>
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
            </ScrollSection>
            {nearbyServices?.length && user?.location ? (
              <>
                <p className="titles">
                  Nearby
                  <span className="service-location">
                    ({nearbyServices[0]?.location})
                  </span>
                </p>
                <ScrollSection>
                  {nearbyServices?.map((nearbyService) => (
                    <DetailsCard
                      key={nearbyService._id}
                      id={nearbyService._id}
                      link="venueprofile"
                      image={nearbyService.imageCover}
                      title={nearbyService.businessName}
                      description={nearbyService.businessCategory}
                      width={330}
                      height={180}
                    />
                  ))}
                </ScrollSection>
              </>
            ) : (
              ""
            )}

            {topVenues?.length ? (
              <>
                <p className="titles">Top Venues</p>
                <ScrollSection>
                  {topVenues?.map((card) => (
                    <DetailsCard
                      key={card._id}
                      id={card._id}
                      link="venueprofile"
                      image={card.imageCover}
                      title={card.businessName}
                      description={card.businessCategory}
                      width={330}
                      height={180}
                      rate={card.ratingsAverage}
                    />
                  ))}
                </ScrollSection>
                {/* </div> */}
              </>
            ) : (
              ""
            )}
            {topPhotographers?.length ? (
              <>
                <p className="titles">Top Photographers</p>
                <ScrollSection>
                  {topPhotographers?.map((card) => (
                    <DetailsCard
                      key={card._id}
                      id={card._id}
                      link="venueprofile"
                      image={card.imageCover}
                      title={card.businessName}
                      description={card.businessCategory}
                      width={330}
                      height={180}
                    />
                  ))}
                </ScrollSection>
                {/* </div> */}
              </>
            ) : (
              ""
            )}
            {topMakeupArtists?.length ? (
              <>
                <p className="titles">Top Makeup Artists</p>
                <ScrollSection>
                  {topMakeupArtists?.map((card) => (
                    <DetailsCard
                      key={card._id}
                      id={card._id}
                      link="venueprofile"
                      image={card.imageCover}
                      title={card.businessName}
                      description={card.businessCategory}
                      width={330}
                      height={180}
                    />
                  ))}
                </ScrollSection>
                {/* </div> */}
              </>
            ) : (
              ""
            )}
          </div>
        </>
      )}
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
    /* height: 12rem; */
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
