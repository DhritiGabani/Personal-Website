import React from "react";
import Container from "react-bootstrap/Container";

import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";
import AppRouter from "./components/AppRouter";
import Navigation from "./components/Navigation";

// import { render } from "react-dom/cjs/react-dom.production.min";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Container className="p=0" fluid={true}>
            <Navigation />
            <AppRouter />
            <Footer />
          </Container>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
