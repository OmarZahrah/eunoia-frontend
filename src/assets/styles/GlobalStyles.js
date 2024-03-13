import { createGlobalStyle, css } from "styled-components";
const GlobalStyles = createGlobalStyle`
:root{
    *,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
html{
  /* height: 100%; */
  /* background-color: #fef9f0; */
}
body {
/* font-family: 'Limelight', sans-serif; */
font-family: 'Literata', sans-serif;  
/* min-height: 100vh; */
min-height: 100vh;
  line-height: 1.5;

}
a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}
button {
  cursor: pointer;
}


/* Fonts */

--font-main:'Literata',serif;
--font-sec:'Limelight';

/* color Brand */
    --color-brand-beige:#FEF9F0;
    --color-brand-green:#74AB70;
    --color-brand-pink: #F5B9A7;
    
    /* black */
    --color-black-light:#666666;
    --color-black-mid:#1a1a1ab8;
    --color-black-dark:#333;
;

/* variations */
--color-green-light:#82b37e;
--color-green-mid:#689a65;
--color-green-dark:#5d895a;
--color-pink-light:#f6c0b0;
--color-pink-mid:#dda796;
--color-pink-dark:#c49486;

/* grey */
--color-grey-0: #18212f;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

/* Shadows */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
}
`;

export default GlobalStyles;
