import styled from "styled-components";

const MiniPackage = ({ data }) => {
  return (
    <Wrapper>
      <h3 className="title">{data?.title}</h3>
      <div className="options">
        {data?.options?.map((option, i) => (
          <div className="option" key={i}>
            <span className="option-title">{option?.title}</span>
            <span className="price">{option?.price} EGP</span>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .title {
    color: #555;
    font-size: 18px;
    margin-bottom: 1rem;
    margin-top: 2rem;
  }
  .options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .option {
    display: flex;
    flex-direction: column;
  }
  .option-title {
    /* display: block; */
  }
  .price {
    font-size: 12px;
    color: gray;
  }
`;
export default MiniPackage;
