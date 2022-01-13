import React from "react";
import "./App.scss";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="website-wrapper">
          <Navigation />
          <AppRouter />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
