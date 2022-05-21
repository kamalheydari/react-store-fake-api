import React from "react";
import { HashRouter as Router } from "react-router-dom";

//? Components
import { Navbar, Sidebar, Footer } from "./components";
import ConfigRoutes from "./routes/ConfigRoutes";

//? Global Style
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Sidebar />
        <ConfigRoutes />
        <Footer />
      </Router>
    </>
  );
};

export default App;
