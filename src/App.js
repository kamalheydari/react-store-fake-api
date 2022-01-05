import React from "react";
import { HashRouter as Router } from "react-router-dom";

//? Components
import { Navbar, Sidebar, Footer } from "./components";
import ConfigRoutes from "./routes/ConfigRoutes";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <ConfigRoutes />
      <Footer />
    </Router>
  );
};

export default App;
