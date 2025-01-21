import React, { useEffect, useState, useRef } from "react";

const Header = () => {
  // // 1
  // const logoRef = useRef(null)
  // const [count, setCount] = useState(0)
  // const [show, setShow] = useState(false)

  // // 4
  // const handleInc = () => {
  //     setCount(p => p + 1)
  // }

  // // 3 componentDidMount
  // useEffect(()=> {
  //     console.log("componentDidMount");
  //     console.log(logoRef.current);
  //     logoRef.current.style.color= "red"
  //     handleInc()
  // }, [])

  // // 5 componentDidUpdate
  // useEffect(()=>{
  //     console.log("componentDidUpdate");
  // }, [show, count]) // [] - dependencies

  // // 6 componentWillUnmount - cleanup function
  // useEffect(()=> {
  //     return ()=> {
  //         console.log("componentWillUnmount");
  //     }
  // }, [])

  // // 2
  return (
    <>
      <div className="container mx-auto ">
        <nav className="p-5 flex items-center justify-between">
          <h2 className="size-14  text-4xl">
            <a href="#">Products</a>
          </h2>
          <ul className="flex items-center gap-3">
            <li>
              <a className="text-lg" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="text-lg" href="#">
                About
              </a>
            </li>
            <li>
              {" "}
              <a className="text-lg" href="#">
                Contact
              </a>
            </li>
            <li>
              {" "}
              <a className="text-lg" href="#">
                Account
              </a>
            </li>
          </ul>
          <button className="p-2 border rounded bg-slate-700 text-white">
            Sign in
          </button>
        </nav>
      </div>
    </>
  );
};

export default Header;

{
  /* <div>
  <h2 ref={logoRef}>Header {count}</h2>
  <button onClick={handleInc}>Increment</button>
  <button onClick={()=> setShow(!show)}>Show more</button>
  {
      // conditional rendering
      show && <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  }
</div> */
}
