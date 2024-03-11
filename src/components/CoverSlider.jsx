// import React, { useState } from 'react';
// import styled from 'styled-components';

// const CoverSlider = ({ photos }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextPhoto = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
//   };

//   const prevPhoto = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
//   };

//   return (
//     <Wrapper>
//       <ImageContainer>
//         {photos.map((photo, index) => (
//           <img
//             key={index}
//             className={index === currentIndex ? 'cover active' : 'cover'}
//             src={photo}
//             alt={`cover-${index}`}
//           />
//         ))}
//       </ImageContainer>
//       <button onClick={prevPhoto}>Previous</button>
//       <button onClick={nextPhoto}>Next</button>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div`
//   position: relative;
// `;

// const ImageContainer = styled.div`
//   width: 100%;
//   overflow: hidden;
//   position: relative;
//   height: 300px; /* Set the desired fixed height for the cover image */
// ;
// /* 
// .cover {
//   width: 100%;
//   max-width: 100%;
//   height: auto;
//   opacity: 0;
//   transition: opacity 0.3s ease-in-out;
// } */

// .cover.active {
//   opacity: 1;
// }

// button {
//   position: absolute;
//   top: 50%;
//   background: none;
//   border: none;
//   font-size: 1.5rem;
//   cursor: pointer;
//   color: white;
// }

// button:first-child {
//   left: 1rem;
// }

// button:last-child {
//   right: 1rem;
// }
// `
// export default CoverSlider;
