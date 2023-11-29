import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa6";
import Select from "../../components/Select";
import Button from "../../components/Button";

const Step2 = () => {
  const businessCategories = ["Wedding Hall", "Photographer", "MakeupArtist"];

  const locations = ["Alexandria", "Ismailia", "Cairo", "Portsaid"];
  return (
    <Wrapper>
      <div className="inputs">
        <Select label="Business Category" options={businessCategories} />
        <Select label="Location" options={locations} />
      </div>
    </Wrapper>
  );
};
export default Step2;

const Wrapper = styled.div`
  .inputs {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  label {
    display: block;
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 8px;
  }
  .select-box {
    position: relative;
    width: 60%;
  }
  select {
    border: none;
    /* width: 60%; */
    width: 100%;
    padding: 1rem 2rem;
    color: var(--color-grey-400);
    box-shadow: 0px 2px 11px -5px rgba(0, 0, 0, 0.5);
    letter-spacing: 1.1px;
    outline: none;
    appearance: none;
    border-radius: 8px;
    position: relative;
  }
  .select-icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
`;
