const Screen = {
  sm: (...args) => {
    const styles = args;
    return `@media (min-width:576px){
            ${styles}
        } `;
  },
  md: (...args) => {
    const styles = args;
    return `@media (min-width:768px){
            ${styles}
        } `;
  },
  lg: (...args) => {
    const styles = args;
    return `@media (min-width:992px){
            ${styles}
        } `;
  },
  xl: (...args) => {
    const styles = args;
    return `@media (min-width:1200px){
            ${styles}
        } `;
  },
  xxl: (...args) => {
    const styles = args;
    return `@media (min-width:1400px){
            ${styles}
        } `;
  },
};

export default Screen;
