import NavBar from "../components/NavBar";
import styled from "styled-components";
import frame from "../../public/images/Frame 21.png";
import arrow from "../../public/images/fe_arrow-down.png";
import { useState } from "react";

function SearchHistory() {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return value && user.name && user.name.toLowerCase().includes(value);
        });
        setSearchResults(results);
      });
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInput(value);
    fetchData(value);
  };

  const clearSearchResults = () => {
    setSearchResults([]);
    setInput("");
  };

  return (
    <Wrapper>
      <NavBar />
      <div className="container">
        <p className="title">Find what you&apos;re looking for</p>
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            placeholder="Search"
            value={input}
            onChange={handleInputChange}
          />
          <img className="search-icon" src={frame} alt="Search Icon" onClick={() => fetchData(input)} />
        </div>
        <div className="search-text">
          <p className="history">Search history</p>
          <p className="clear" onClick={clearSearchResults}>Clear</p>
        </div>
        <div className="result">
          {searchResults.map((result, index) => (
            <div className="arrow-container" key={index}>
              <img className="arrow" src={arrow} alt="Arrow Icon" />
              <p className="arrow-text">{result.name}</p>
            </div>
          ))}
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
    font-size: 2.3rem;
    font-weight: 700;
    line-height: 7.016rem;
    letter-spacing: 0.28rem;
    text-align: center;
    color: #00000099;
    padding: 0 2rem;
    position: relative;
  }

  .search-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 1rem;
  }

  .search-box {
    font-family: Literata;
    font-weight: 310;
    width: 100%;
    max-width: 60%;
    padding: 10px;
    font-size: 1.7rem;
    border: 1px solid #8a8787;
    border-radius: 7px;
    box-sizing: border-box;
    background-color: #fef9f0;
    padding-left: 1rem;
    &:focus {
      border: 1.5px solid #487c44c7;
      outline: none;
    }
  }

  .search-icon {
    width: 60px;
    height: 60px;
    cursor: pointer;
  }
  .search-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }

  .history {
    font-family: Literata;
    color: #00000099;
    font-weight: 310;
    font-size: 1.4rem;
    width: 45%;
    display: flex;
    justify-content: center;
  }
  .clear {
    font-family: Literata;
    color: #00000099;
    font-weight: 310;
    font-size: 1.4rem;
    width: 21.3%;
    position: relative;
    cursor: pointer;
  }

  .clear::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 19%;
    height: 1px;
    background-color: #9d9b9b;
  }
  .result {
    width: 42%;
    display: flex;
    padding-top: 1.5rem;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
  .arrow-container {
    display: flex;
    align-items: center;
  }

  .arrow {
    width: 20px;
  }

  .arrow-text {
    font-family: Literata;
    color: #00000099;
    font-weight: 310;
    font-size: 1.3rem;
    margin-left: 0.5rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.small}) {

    .title {
    font-size: 2.1rem;
    padding-left:1rem;
  }
  .history {
    width: 42.5%;
  }
  .search-box {
    max-width: 65%;
  }
  .clear {
    width: 19.3%;
  }
  .clear::after {
    width: 24%;
  }

  }

  @media only screen and (max-width: ${({ theme }) => theme.semi}) {

.title {
font-size: 2rem;
padding-left:0.2rem;
}
.history {
width: 40.5%;
}
.search-box {
max-width: 68%;
}
.clear {
    width: 18%;
  }
  .clear::after {
    width: 28%;
  }

}

@media only screen and (max-width: ${({ theme }) => theme.avg}) {

.title {
font-size: 1.8rem;
padding-left:0.1rem;
}
.history {
width: 40.9%;
}
.search-box {
max-width: 68%;
}
.clear {
    width: 18.3%;
  }
  .clear::after {
    width: 36%;
  }

}

@media only screen and (max-width: ${({ theme }) => theme.tablet}) {

.title {
font-size: 1.5rem;
padding-left:0.1rem;
}
.history {
width: 41.9%;
}
.search-box {
    padding: 6px;
    font-size: 1.4rem;
    max-width: 70%;

  }
.clear {
    width: 17.3%;
  }
  .clear::after {
    width: 45%;
  }

}

@media only screen and (max-width: ${({ theme }) => theme.mobile}) {

.title {
font-size: 1.3rem;
padding-left:0.1rem;
line-height:3rem;
}

.history {
width: 47.9%;
font-size:1.2rem;
}
.search-box {
    padding: 4px;
    font-size: 1.2rem;
    max-width: 65%;

  }
.clear {
    width: 20%;
    font-size:1.2rem;
  }
  .clear::after {
    width: 45%;
  }
  .search-icon {
    width: 50px;
    height: 50px;
  }


  .arrow-text {
    font-size: 1.1rem;
    margin-left: 1rem;
  }

}

`;

export default SearchHistory;
