import NavBar from "../components/NavBar";
import styled from "styled-components";
import SearchResults from "../components/SearchResults";
import { FaSort, FaAngleDown } from "react-icons/fa";
import { useState } from "react";

function Search() {
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
      <p className="title">Photographers</p>
      <div className="sort-section">
        <ul className="sort-list">
          <li className="sort">
            <FaSort /> <span>Sort by :</span>
          </li>
          <div className="sort-dropdown">
            <select
              className="price"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option className="options" value="">
                Prices
              </option>
              <option className="price" value="priceLowToHigh">
                Price: Low to High
              </option>
              <option value="priceHighToLow">Price: High to Low</option>
              {/* <FaAngleDown className="dropdown-icon" /> */}
            </select>
            <select value={sortByRating} onChange={handleRatingSortChange}>
              <option value="">Rating</option>
              <option value="LowToHigh">Rating: Low to High</option>
              <option value="HighToLow">Rating: High to Low</option>
              {/* <FaAngleDown className="dropdown-icon" /> */}
            </select>
          </div>
        </ul>
      </div>
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
  ul {
    display: flex;
    width: 100%;
    gap: 6rem;
    color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    padding-left: 0;
  }
  .sort-list {
    justify-content: center;
  }
  .sort-section {
    position: relative;
    padding-bottom: 1.5rem;
    margin-bottom: 2.5rem;
  }
  .sort-section::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 76%;
    transform: translateX(-80%);
    width: 86.4%;
    height: 0.013rem;
    background-color: #3c3b3b33;
  }
  .sort {
    font-family: Literata;
    font-size: 1.7rem;
    font-weight: 300;
    color: #00000099;
    padding-left: 5rem;
    position: relative;
    display: flex;
    align-items: center;
    gap: 5px;
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
  .sort-dropdown {
    position: relative;
    display: flex;
    align-items: center;
    /* gap: 5rem; */
  }

  .sort-dropdown select {
    font-family: Literata;
    font-size: 1.7rem;
    font-weight: 300;
    color: #00000099;
    border: none;
    background-color: transparent;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
    .title {
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
    .sort-list {
      gap: 1.7rem;
    }
    .sort-dropdown {
      gap: 1rem;
    }
    .sort-dropdown select {
      font-size: 1.4rem;
    }

    .sort {
      font-size: 1.5rem;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    .result {
      width: 100%;
    }
    .title {
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
    .sort-list {
      gap: 1.7rem;
    }
    .sort-dropdown {
      gap: 1rem;
    }
    .sort-dropdown select {
      font-size: 1.4rem;
    }

    .sort {
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    .title {
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
    .sort-list {
      gap: 1.7rem;
    }
    .sort-dropdown {
      gap: 1rem;
    }
    .sort-dropdown select {
      font-size: 1.2rem;
    }

    .sort {
      font-size: 1.5rem;
    }
    .mask-wrapper {
      top: 40%;
    }
  }
`;

export default Search;
