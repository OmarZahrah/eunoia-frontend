import styled from "styled-components";
import Star from "./Star";
import { useState } from "react";

function StarRating() {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
  }

  return (
    <Wrapper>

      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
          onRate={() => handleRating(i + 1)}
          onHoverIn={() => setTempRating(i + 1)}
          onHoverOut={() => setTempRating(0)}
        />
      ))}
    </Wrapper>
  );
}

export default StarRating;
const Wrapper = styled.div``;
