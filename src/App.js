import React from "react";
import { HashRouter as Router } from "react-router-dom";

//? Components
import { Navbar, Sidebar, Footer } from "./components";
import Routes from "./routes/Routes";



const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes />
      <Footer />
    </Router>
  );
};

export default App;
