import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { MediaContextProvider } from "./components/MediaContextProvider";

const App = () => {
  return (
    <BrowserRouter>
      <MediaContextProvider>
        <Header />
        <Main />
        <Footer />
      </MediaContextProvider>
    </BrowserRouter>
  );
};

export default App;
