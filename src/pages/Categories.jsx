import styled from "styled-components";
import NavBar from "../components/NavBar";
import CategoriesDiv from "../components/CategoriesDiv";
import venues from "../images/Venues.png";
import photographers from "../images/Photographers.png";
import eventPlanners from "../images/EventPlanners.png";
import DJs from "../images/DJs.png";
import makeupArtists from "../images/MakeupArtists.png";
import food from "../images/Food.png";
import hairStylists from "../images/HairStylists.png";
import otherDetails from "../images/OtherDetails.png";

function Categories() {
  return (
    <Wrapper>
      <NavBar />
      <h1>Discover Your Essentials</h1>
      <div className="container">
        <CategoriesDiv
          title={"Venues"}
          backgroundImage={venues}
          link={"/profile"}
          marginTop={35}
        />
        <CategoriesDiv
          title={"Photographers"}
          backgroundImage={photographers}
          link={"/photographers"}
          marginTop={115}
        />
        <CategoriesDiv
          title={"Event Planners"}
          backgroundImage={eventPlanners}
          link={"/eventplanners"}
          marginTop={65}
        />
        <CategoriesDiv
          title={"DJs"}
          backgroundImage={DJs}
          link={"/djs"}
          marginTop={40}
        />

        <CategoriesDiv
          title={"Makeup Artists"}
          backgroundImage={makeupArtists}
          link={"/makeupartist"}
          marginTop={90}
        />
        <CategoriesDiv
          title={"Food"}
          backgroundImage={food}
          link={"/food"}
          marginTop={50}
        />

        <CategoriesDiv
          title={"Hair Stylists"}
          backgroundImage={hairStylists}
          link={"/hairstylest"}
          marginTop={100}
        />
        <CategoriesDiv
          title={"Other Details"}
          backgroundImage={otherDetails}
          link={"/otherdetails"}
          marginTop={15}
        />
      </div>
    </Wrapper>
  );
}

export default Categories;
const Wrapper = styled.div`
  background: #fef9f0;
  min-height: 100vh;
  h1 {
    font-size: 30px;
    line-height: 50px;
    letter-spacing: 1px;
    text-align: center;
  }
  .container {
    display: flex;
    justify-content: space-between;
    margin: 0 8rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
    .container {
      margin: 0 4rem;
    }
  }

  @media only screen and (max-width: 52.5em) {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0;
    }
    h1 {
      font-size: 30px;
      line-height: 5rem;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    h1 {
      font-size: 25px;
    }
  }
`;
