//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
//import "./index.css";
// import Counters from "./prevState-31Aug.jsx";
// import ToggleExample from "./ToggleEx.jsx";
//import Names from "./State/array-State";
import Products from "./State/printJsonarray";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  <>
    {/* <Counters />
    <hr />
    <ToggleExample /> */}

    {/* <Names /> */}
    <Products />
  </>
);
