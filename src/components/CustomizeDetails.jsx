import styled from "styled-components";
import RadioButton from "./RadioButton";

function CustomizeDetails({ title, options, register }) {
  console.log(options);
  return (
    <Wrapper>
      <p>{title}</p>
      <div className="options">
        {options?.map((option, i) => (
          <RadioButton
            id={option._id}
            head={option.title}
            details={`${option.price} EGP `}
            register={register}
            key={i}
            title={title}
          />
        ))}
        {/* <RadioButton head={"250"} details={"6000 EGP"} />
        <RadioButton head={"250"} details={"6000 EGP"} />
        <RadioButton
          head={"Small water bottle per person"}
          details={"6000 EGP"}
        /> */}
      </div>
      <hr />
    </Wrapper>
  );
}

export default CustomizeDetails;
const Wrapper = styled.div`
  p {
    color: #00000099;
    /* font-size: 1.4rem; */
    font-size: 1.6rem;

    font-weight: 600;
    margin-bottom: 15px;
    text-transform: capitalize;
  }
  .options {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    /* grid-column-gap: 20rem; */
  }
  hr {
    width: 50%;
    border-color: rgba(0, 0, 0, 0.086);
    margin: 2rem auto;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mid}) {
    p {
      font-size: 1.4rem;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.small}) {
    p {
      font-size: 1.3rem;
    }
  }
  @media only screen and (max-width: 52.5em) {
    p {
      font-size: 1.2rem;
    }
  }
`;
