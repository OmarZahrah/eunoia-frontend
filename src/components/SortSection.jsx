import styled from "styled-components";
import { FaSort } from "react-icons/fa";

function SortSection({ sortBy, sortByRating, handleSortChange, handleRatingSortChange }) {
  return (
    <Wrapper>
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
            </select>
          </div>
        </ul>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
  .sort-dropdown {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1.5rem;
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
  
  }
`;

export default SortSection;
