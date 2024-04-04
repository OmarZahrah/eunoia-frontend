
import styled from "styled-components";
import SearchResults from "../components/SearchResults";
import { useState } from "react";
import SortSection from "./SortSection";

function Category({ title }) {
  const [sortBy, setSortBy] = useState("");
  const [sortByRating, setSortByRating] = useState("");

  // Function to handle sorting option change
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    // Implement sorting logic based on the selected option
    console.log("Sorting by: ", event.target.value);
  };

  const handleRatingSortChange = (event) => {
    setSortByRating(event.target.value);
    // Implement sorting logic based on the selected option
    console.log("Sorting by rating: ", event.target.value);
  };

  return (
    <Wrapper>
      <p className="title">{title}</p>
      <SortSection
        sortBy={sortBy}
        sortByRating={sortByRating}
        handleSortChange={handleSortChange}
        handleRatingSortChange={handleRatingSortChange}
      />
      <div className="search-container">
        <SearchResults showRate={4.5} className="result" />
        <SearchResults showRate={4.5} className="result" />
        <SearchResults showRate={4.5} className="result" />
        <SearchResults showRate={4.5} className="result" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fef9f0;
  padding-bottom: 3rem;

  .title {
    font-family: Literata;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.25rem;
    margin: 2rem 0 1rem 0;
    text-align: center;
    color: #00000099;
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
    padding: 0 4rem;
    /* overflow-x: auto; */
    margin-top: 1rem;
    display: flex;
    column-gap: 2rem;
    row-gap: 1.5rem;
    justify-content: center;
    align-items: center;
  }
  .result {
    width: 46%;
  }


  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
    .title {
      font-size: 1.6rem;
    }

    .title::before,
    .title::after {
      top: 50%;
      width: 27%;
    }

    .title::before {
      left: 21%;
    }

    .title::after {
      right: 21%;
    }

  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    .result {
      width: 100%;
    }
    .title {
      font-size: 1.5rem;
    }

    .title::before,
    .title::after {

      top: 50%;
      width: 23%;
 
   
    }

    .title::before {
      left: 18%;
    }

    .title::after {
      right: 18%;
    }
   
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    .title {
      font-size: 1.6rem;
    }

    .title::before,
    .title::after {
      top: 50%;
      width: 20%;
      
    }

    .title::before {
      left: 15%;
    }

    .title::after {
      right: 15%;
     
    }
    
    .mask-wrapper {
      top: 40%;
    }
  }
`;

export default Category;
