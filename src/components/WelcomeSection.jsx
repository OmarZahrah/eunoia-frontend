import styled from "styled-components";
function WelcomeSection({ img, welcomeText, header, imgsize, className }) {
  return (
    <Wrapper className={className} imgsize={imgsize}>
      <p className="again">{welcomeText}</p>
      <h1>{header}</h1>
      <img src={img} alt="Welcome!" />
    </Wrapper>
  );
}

export default WelcomeSection;

const Wrapper = styled.section`
  border-radius: 5.625rem 0 0 5rem;
  background: var(--beige, #fef9f0);
  /* height: 100vh; */
  height: 100%;
  text-align: center;
  padding: 3.75rem 0;

  .again {
    color: var(--text, rgba(0, 0, 0, 0.6));
    text-align: center;
    font-family: Literata;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.026rem;
  }
  h1 {
    color: var(--pink, #f5b9a7);
    font-family: Literata;
    font-size: 3.125rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: 0.313rem;
    padding-bottom: 4.375rem;
  }
  img {
    width: ${({ imgsize }) => imgsize || "60%"};
    /* width: 50%; */
  }

  /* @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    .again {
      font-size: 1.2rem;
      font-weight: 700;
      letter-spacing: -0.026rem;
      padding-bottom: 1rem;
    }

    h1 {
      font-size: 2.5rem;
      letter-spacing: 0.2rem;
      padding-bottom: 3.5rem;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    .again {
      font-size: 1.1rem;
      font-weight: 600;
      letter-spacing: -0.02rem;
      padding-bottom: 1rem;
    }

    h1 {
      font-size: 2.4rem;
      letter-spacing: 0.2rem;
      padding-bottom: 4.375rem;
    }
  } */
`;
