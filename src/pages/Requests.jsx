import NavBar from "../components/NavBar";
import styled from "styled-components";
import RequestsComponent from "../components/RequestsComponent";

function Requests() {
  return (
    <Wrapper>
      <NavBar />
      <div className="request-container">
        <p className="title">Requests</p>
        <div className="components">
          <RequestsComponent
            dateNumber="29"
            dateMonth="Dec 2024"
            day="Tue"
            time="5:00 PM"
            noteText="Location will be in Ismailia in Mercure"
          />
          <RequestsComponent
            dateNumber="18"
            dateMonth="Dec 2024"
            day="Tue"
            time="5:00 PM"
            noteText="Location will be in Ismailia in Mercure"
          />
          <RequestsComponent
            dateNumber="5"
            dateMonth="Dec 2024"
            day="Tue"
            time="5:00 PM"
            noteText="Location will be in Ismailia in Mercure"
          />
          <RequestsComponent
            dateNumber="22"
            dateMonth="Dec 2024"
            day="Tue"
            time="5:00 PM"
            noteText="Location will be in Ismailia in Mercure"
          />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fef9f0;
  min-height: 100vh;
  overflow-x: hidden;

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
    justify-content: center;
    gap: 3rem;
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
  @media only screen and (max-width: ${({ theme }) => theme.avg}) {
    .components > * {
      width: calc(70% - 10px);
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    .components > * {
      /* width: calc(85% - 5px); */
      width: 100%;
    }
    .title {
      font-size: 2rem;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    .components > * {
      /* width: calc(100% - 5px); */
    }
    .title {
      font-size: 2rem;
    }
  }
`;

export default Requests;
