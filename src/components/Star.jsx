import styled from "styled-components";

function Star({ onRate, full, onHoverIn, onHoverOut, color }) {
  return (
    <Wrapper
      color={color}
      role="button"
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={"#FCF55F		"}
          stroke={"#FCF55F	"}
        >
          <path d="M12 2l2.4 7.3h7.6l-6.2 4.5 2.4 7.3-6.2-4.5-6.2 4.5 2.4-7.3-6.2-4.5h7.6z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={" rgba(217, 217, 217, 1)"}
          viewBox="0 0 24 24"
          stroke={" rgba(217, 217, 217, 1)"}
          strokeWidth="2"
        >
          <path d="M12 2l2.4 7.3h7.6l-6.2 4.5 2.4 7.3-6.2-4.5-6.2 4.5 2.4-7.3-6.2-4.5h7.6z" />
        </svg>
      )}
    </Wrapper>
  );
}
export default Star;

const Wrapper = styled.span`
  display: inline-block;
  width: 55px;
  margin-bottom: 10px;
`;
