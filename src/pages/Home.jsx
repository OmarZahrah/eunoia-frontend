import NavBar from "../components/NavBar";
import styled from "styled-components";
import SpecialOffers from "../components/SpecialOffers";
import ring from "../images/ring.png";
import DetailsCard from "../components/DetailsCard";
import man from "../images/man.png";
import table from "../images/table.png";

const Home = () => {
  return (
    <Wrapper>
      <NavBar />
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
            width={230}
            height={200}
          />
          <DetailsCard
            image={man}
            title={"Amr Abdallah"}
            description={"Photographer"}
            width={230}
            height={200}
          />
          <DetailsCard
            image={man}
            title={"Amr Abdallah"}
            description={"Photographer"}
            width={230}
            height={200}
          />
          <DetailsCard
            image={man}
            title={"Amr Abdallah"}
            description={"Photographer"}
            width={230}
            height={200}
          />
          <DetailsCard
            image={man}
            title={"Amr Abdallah"}
            description={"Photographer"}
            width={230}
            height={200}
          />
          <DetailsCard
            image={man}
            title={"Amr Abdallah"}
            description={"Photographer"}
            width={230}
            height={200}
          />
          <DetailsCard
            image={man}
            title={"Amr Abdallah"}
            description={"Photographer"}
            width={230}
            height={200}
          />
        </div>
        <p className="titles">Nearby</p>
        <div className="packages-container">
          <DetailsCard
            image={table}
            title={"Yomna Tarek"}
            description={"Event Planner"}
            width={350}
            height={200}
          />
          <DetailsCard
            image={table}
            title={"Yomna Tarek"}
            description={"Event Planner"}
            width={350}
            height={200}
          />
          <DetailsCard
            image={table}
            title={"Yomna Tarek"}
            description={"Event Planner"}
            width={350}
            height={200}
          />
          <DetailsCard
            image={table}
            title={"Yomna Tarek"}
            description={"Event Planner"}
            width={350}
            height={200}
          />
          <DetailsCard
            image={table}
            title={"Yomna Tarek"}
            description={"Event Planner"}
            width={350}
            height={200}
          />
        </div>
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
    gap: 1.5rem;
    /* padding-bottom: 1rem; */
    overflow: auto;
    white-space: nowrap;
    height: 240px;
    /* justify-content: space-evenly; */
  }
  .packages-container::-webkit-scrollbar-thumb {
    /* width: 20px; */
    background-color: #d4d4d4;
    border-radius: 10px;
    cursor: pointer;
  }
  .packages-container::-webkit-scrollbar {
    height: 0.5rem;
  }
`;
