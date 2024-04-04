
import NavBar from "../components/NavBar";
import styled from "styled-components";
import SearchResults from "../components/SearchResults";

function Search() {
  return (
    <Wrapper>
      <NavBar />
      <div className="container">
        <p className="title">Favorites</p>
        <div className="search-container">
        <SearchResults showRate={4.5} />
        <SearchResults showRate={4.5} />
        <SearchResults showRate={4.5} />
        <SearchResults showRate={4.5} />
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
    font-size: 2rem;
    font-weight: 700;
    line-height: 7.016rem;
    letter-spacing: 0.25rem;
    text-align: center;
    color: #00000099;
    padding: 0 2rem;
    position: relative;
  }

  .title::before,
  .title::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 30%;
    height: 1px;
    background-color: #3c3b3b33;
  }

  .title::before {
    left: 22%;
    transform: translateX(-50%);
  }

  .title::after {
    right: 22%;
    transform: translateX(50%);
  }
  .search-container {
    display: flex;
    flex-wrap: wrap;
    overflow-x: auto;
    margin-top: 1rem;
    display: flex;
    gap: 1.5rem;
  }
  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
    .title{
   font-size: 1.6rem;
   position: relative;

}

.title::before,
  .title::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 27%;
    height: 1px;
    background-color: #3c3b3b33;
  }

  .title::before {
    left: 21%;
    transform: translateX(-50%);
  }

  .title::after {
    right: 21%;
    transform: translateX(50%);
  }


  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    .title{
   font-size: 1.5rem;
   position: relative;

}

.title::before,
  .title::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 23%;
    height: 1px;
    background-color: #3c3b3b33;
  }

  .title::before {
    left: 18%;
    transform: translateX(-50%);
  }

  .title::after {
    right: 18%;
    transform: translateX(50%);
  }


  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {

.title{
   font-size: 1.6rem;
   position: relative;

}

.title::before,
  .title::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 20%;
    height: 1px;
    background-color: #3c3b3b33;
  }

  .title::before {
    left: 15%;
    transform: translateX(-50%);
  }

  .title::after {
    right: 15%;
    transform: translateX(50%);
  }

 }
 
`;

export default Search;