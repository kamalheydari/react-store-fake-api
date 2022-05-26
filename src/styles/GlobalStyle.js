import { createGlobalStyle } from "styled-components";
import Screen from "./Screen";

//?  fonts
import "@fontsource/poppins";

const GlobalStyle = createGlobalStyle`
/* variables  */
:root {
  /** colors */
  --blue-color-1: #155e75;
  --blue-color-2: #edffec;
  --blue-color-3: #efeff0;
  --blue-color-4: #075985;
  --bg-color: #fff;
  --red-color-1: #e11d48;
  --green-color-1: #16a34a;
  --yellow-color-1: #ffff00;
  --yellow-color-2: #ffa200;
  --gray-color-1: #6b7280;
  --gray-color-2: #d6d7da41;
  --white-color: #fff;

  /** sizes */
  --max-width: 1300px;
  --header-height: 6rem;
  --footer-height: 5rem;
  --breadcrumb-height: 5rem;

  /** styles */
  --transition: 0.3s;
  --radius: 0.35rem;


  /* font-sizes */
  --fs-900: 9.375rem;
  --fs-800: 3rem;
  --fs-700: 2.5rem;
  --fs-600: 2rem;
  --fs-500: 1.62rem;
  --fs-400: 1.425rem;
  --fs-300: 1rem;
  --fs-200: 0.875rem;
}

/* resets */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: none;
  background: none;
  outline: none;
}

html {
  scroll-behavior: smooth;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}

/*? typographi */
html {
  font-size: 0.525rem;  //8px
  
  ${Screen.sm`
    font-size: 0.562rem;  //9px
    `}

${Screen.md`
  font-size: 0.625rem;  //10px
  `}

${Screen.lg`
font-size: 0.75rem; //12px
  `}
}


/*? global styles */

body {
  background: var(--bg-color);
  overflow-x: hidden;
  font-family: "Poppins", sans-serif;
}

img {
  width: 100%;
  height: 100%;
}

section {
  width: min(100%, var(--max-width));
  margin-inline:  auto;
}
main {
  margin-top: var(--header-height);
}

a {
  color: var(--green-color-1);
  transition: var(--transition);
}
a:hover {
  color: var(--blue-color-1);
}
/*? global class */

.page {
  min-height: calc(
    100vh -
      (var(--header-height) + var(--footer-height) + var(--breadcrumb-height))
  );
}
.page-w-b {
  margin-top: var(--header-height);
  min-height: calc(100vh - (var(--header-height) + var(--footer-height)));
}


`;

export default GlobalStyle;
