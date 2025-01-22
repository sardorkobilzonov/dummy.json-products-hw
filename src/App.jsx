import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Footer from "./components/footer/footer";

function App() {
  const [show, setShow] = React.useState(false);

  return (
    <>
      {/* <button onClick={() => setShow(!show)}>Menu</button> */}
      {/* {show && <Header />} */}
      <Header />
      <Products />
      <Footer />
    </>
  );
}

export default App;
