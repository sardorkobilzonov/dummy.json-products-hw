import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Products from "./components/products/Products";

function App() {
  const [show, setShow] = React.useState(false);

  return (
    <>
      {/* <button onClick={() => setShow(!show)}>Menu</button> */}
      {/* {show && <Header />} */}
      <Header />
      <Products />
    </>
  );
}

export default App;
