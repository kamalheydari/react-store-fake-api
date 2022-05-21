import { createGlobalStyle } from "styled-components";
import Screen from "./Screen";

//?  fonts
import "@fontsource/poppins";

const GlobalStyle = createGlobalStyle`
/* variables  */
:root {
  /** colors */
  --blue-color-1: #345b63;
  --blue-color-2: #edffec;
  --blue-color-3: #efeff0;
  --blue-color-4: #5eaaa8;
  --bg-color: #9ab7f515;
  --red-color-1: #da0037;
  --green-color-1: #519872;
  --yellow-color-1: #ffff00;
  --gray-color-1: rgb(107,114,128);
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
  --fs-500: 1.75rem;
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
  font-size: 0.562rem;

  ${Screen.sm`
    font-size: 0.687rem;
  `}

  ${Screen.md`
    font-size: 0.75rem;
  `}

  ${Screen.lg`
    font-size: 0.75rem;
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
