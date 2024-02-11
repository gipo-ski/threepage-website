import React from "react";
// import { useState, useEffect } from "react";

import RouterURL from "./router/RouterURL";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <RouterURL />
      <Footer />
    </>
  );
}

export default App;
