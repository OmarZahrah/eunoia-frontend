import styled from "styled-components";
import { FaSort } from "react-icons/fa";
import { governorates } from "../data/data";
import { useServiceContext } from "../context/ServiceContext";

function SortSection({
  sortBy,
  sortByRating,
  handleSortChange,
  handleRatingSortChange,
}) {
  const { location, setLocation, rating, setRating } = useServiceContext();
  return (
    <Wrapper>
      <div className="sort">
        <FaSort /> <span>Sort by :</span>
      </div>
      <select className="price" value={sortBy} onChange={handleSortChange}>
        <option className="options" value="">
          Prices
        </option>
        <option className="price" value="priceLowToHigh">
          Price: Low to High
        </option>
        <option value="priceHighToLow">Price: High to Low</option>
        {/* <FaAngleDown className="dropdown-icon" /> */}
      </select>
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        <option value="">Rating</option>
        <option value="ratingsAverage">Rating: Low to High</option>
        <option value="-ratingsAverage">Rating: High to Low</option>
      </select>
      <select value={location} onChange={(e) => setLocation(e.target.value)}>
        <option value="">Location</option>
        {governorates.map((governorate) => (
          <option key={governorate.value}>{governorate.option}</option>
        ))}
      </select>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 1.5rem 4rem;
  margin: 3rem 0;
  .sort {
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 1.7rem;
    gap: 5px;
    color: #00000099;
  }

  select {
    flex: 1;
    position: relative;
    width: 50%;
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
    border-left: 1px solid #ccc;
    padding-left: 1rem;
  }
  select:focus {
    outline: none;
  }

  @media only screen and (max-width: ${({ theme }) => theme.semi}) {
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    padding: 1rem 2rem;
    select {
      font-size: 1.4rem;
    }
    .sort {
      font-size: 1.4rem;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    padding: 1rem;
    select {
      font-size: 1.1rem;
    }
    .sort {
      font-size: 1.1rem;
    }
  }
`;

export default SortSection;
