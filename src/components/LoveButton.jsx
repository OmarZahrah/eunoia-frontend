import { useState } from "react";
import PropTypes from "prop-types";

const containerStyle = {
  display: "flex",
  alignItems: "center",
 
};

const heartContainerStyle = {
  display: "flex",
};

LoveButton.propTypes = {
  maxRating: PropTypes.number,
  defaultRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  messages: PropTypes.array,
  className: PropTypes.string,
  onSetRating: PropTypes.func,
};

export default function LoveButton({
  maxRating = 1,
  color = "#da342bb4",
  size = 24,
  className = "",
  defaultRating = -1,
  onSetRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(-1);

  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }


  return (
    <div style={containerStyle} className={className}>
      <div style={heartContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Heart
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
    </div>
  );
}

function Heart({ onRate, full, onHoverIn, onHoverOut, color, size }) {
    const heartStyle = {
      width: `${size}px`,
      height: `${size}px`,
      display: "block",
      cursor: "pointer",
    };
  
    return (
      <span
        role="button"
        style={heartStyle}
        onClick={onRate}
        onMouseEnter={onHoverIn}
        onMouseLeave={onHoverOut}
      >
        {full ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={color}
            stroke={color}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="white"
            fill="#4b49492a"
            style={{ stroke: "black", strokeWidth: "0.0915rem" }}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        )}
      </span>
    );
  }
  
  

