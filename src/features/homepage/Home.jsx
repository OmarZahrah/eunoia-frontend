import NavBar from "../../components/NavBar";
import styled from "styled-components";
import SpecialOffers from "../../components/SpecialOffers";
import ring from "../../images/ring.png";
import DetailsCard from "../../components/DetailsCard";
import man from "../../images/man.png";
import wedding1 from "../../images/wedding1.jpg";
import wedding2 from "../../images/wedding2.jpg";
import wedding3 from "../../images/wedding3.jpg";
import mirage from "../../images/mirage.jpg";
import Loading from "../../components/Loading";
import { useUser } from "../userProfile/useUser";
import { useGetNearby } from "./useGetNearby";
import ScrollSection from "../../components/ScrollSection";
import { useGetServices } from "../categories/useGetServices";
import ChatIcon from "../../components/ChatIcon";
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
  const { allServices: topEventPlanners } = useGetServices([
    { category: "Event Planners" },
    { limit: 10 },
    { sort: "-ratingsAverage" },
  ]);
  const { allServices: topDJS } = useGetServices([
    { category: "DJs" },
    { limit: 10 },
    { sort: "-ratingsAverage" },
  ]);

  const { allServices: topHairStylists } = useGetServices([
    { category: "Hair Stylists" },
    { limit: 10 },
    { sort: "-ratingsAverage" },
  ]);
  const { allServices: topFood } = useGetServices([
    { category: "food" },
    { limit: 10 },
    { sort: "-ratingsAverage" },
  ]);

  return (
    <Wrapper>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {/* <NavBar /> */}
          <ChatIcon />
          <div className="container">
            <p className="titles">Special Offers</p>
            <ScrollSection>
              <SpecialOffers
                backgroundImage={wedding3}
                percentage={"-10%"}
                title={"Merecure Alforsan "}
                category={"Venues"}
                link={"/"}
              />
              <SpecialOffers
                backgroundImage={wedding2}
                percentage={"-20%"}
                title={"Wessam Photographer"}
                category={"Photographer"}
                link={"/"}
              />
              <SpecialOffers
                backgroundImage={wedding1}
                percentage={"-15%"}
                title={"Karim Roshdy"}
                category={"Photographer"}
                link={"/"}
              />
              <SpecialOffers
                backgroundImage={mirage}
                percentage={"-10%"}
                title={"قاعه ميراج"}
                category={"Venues"}
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
            {topEventPlanners?.length ? (
              <>
                <p className="titles">Top Event Planners</p>
                <ScrollSection>
                  {topEventPlanners?.map((card) => (
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
            {topDJS?.length ? (
              <>
                <p className="titles">Top DJs</p>
                <ScrollSection>
                  {topDJS?.map((card) => (
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
            {topHairStylists?.length ? (
              <>
                <p className="titles">Top Hair Stylists</p>
                <ScrollSection>
                  {topHairStylists?.map((card) => (
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
            {topFood?.length ? (
              <>
                <p className="titles">Top Food</p>
                <ScrollSection>
                  {topFood?.map((card) => (
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
  min-height: 100%;
  .container {
    margin: 0 1.5rem;
  }
  .titles {
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: rgba(0, 0, 0, 0.677);
    padding: 15px 0;
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
