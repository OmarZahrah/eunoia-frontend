import logo from "../../public/images/png-wordmark-1.png";
import styled from "styled-components";
import Button from "../components/Button";
import image1 from "../../public/images/unsplash-ebv-cs-rypmx-m.png";
import image2 from "../../public/images/unsplash-fn-0-xxl-9-szc-u.png";
import image3 from "../../public/images/unsplash-azod-v-2-d-0-g-lc.png";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <Wrapper>
      {/* <div className="container"> */}
      <nav>
        <img className="Hlogo" src={logo} />
        <div className="buttons">
          <Link to="/login">
            <Button
              className="logbutton"
              color="pink"
              background="transparent"
              size="small"
            >
              Login
            </Button>
          </Link>
          <Link to="/signup/create">
            <Button
              className="regbutton"
              color="white"
              background="pink"
              size="small"
            >
              Register
            </Button>
          </Link>
        </div>
      </nav>
      <div className="container">
        <div className="images">
          <img src={image1} />
          <img src={image2} />
          <img src={image3} />
        </div>

        <div className="text">
          <p className="h">Your Event, Perfected Here.</p>

          <p>
            Empower your event dreams with our comprehensive platform, your
            ultimate guide to seamless and unforgettable gatherings.
          </p>
        </div>
        {/* </div> */}
      </div>
    </Wrapper>
  );
};
export default Welcome;

const Wrapper = styled.div`
  height: 100vh;
  background: linear-gradient(to top, #fef9f0 55%, #fff 45%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 1.1rem 8rem; */
    width: 80%;
    padding-top: 1rem;
    /* margin: 0 auto; */
  }
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* padding-top: 1rem; */
  }

  .Hlogo {
    width: 9.3rem;
    height: 2.2rem;
    flex-shrink: 0;
  }

  .logbutton {
    font-size: 1.5rem;
  }

  .regbutton {
    font-size: 1.3rem;
    letter-spacing: 0.0625rem;
    text-indent: -0.25rem;
    width: 9.375rem;
    height: 3.125rem;
    flex-shrink: 0;
  }
  .images {
    display: flex;
    width: 80%;
    margin: 0 auto;
    /* padding: 20px; */
    gap: 1rem;
    justify-content: center;
  }
  .images img {
    width: 32%;
    padding: 17px;
  }

  .h {
    color: var(--text, rgba(0, 0, 0, 0.6));
    font-size: 2.5rem;
    font-family: "literata", serif;
    font-weight: 510;
    font-style: italic;
    letter-spacing: 0.0625rem;
    width: 50%;
  }

  p {
    color: var(--text, rgba(0, 0, 0, 0.6));
    text-align: center;
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: 0.0625rem;
    width: 55%;
    /* padding-bottom: 1rem; */
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
`;
