import styled from "styled-components";

function WelcomeSection({ img, welcomeText, header, style }) {
  return (
    <Wrapper>
      <section className="right">
        <p className="again">{welcomeText}</p>
        <h1>{header}</h1>
        <img src={img} alt="Welcome!" style={style} />
      </section>
    </Wrapper>
  );
}

export default WelcomeSection;

const Wrapper = styled.div`
  .right {
    border-radius: 5.625rem 0 0 5rem;
    background: var(--beige, #fef9f0);
    height: 100vh;
    text-align: center;
  }
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
`;
