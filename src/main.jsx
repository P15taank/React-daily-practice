//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
//import "./index.css";
// import Counters from "./prevState-31Aug.jsx";
// import ToggleExample from "./ToggleEx.jsx";
//import Names from "./State/array-State";
// import Products from "./State/printJsonarray";
// import Todos from "./State/ToDo List/Todos";
// import DynamicForm from "./State/Forms-Sep 4/dynamicForm";
// import ArrayCrudTodo from "./State/Array-state/arrayCrud";
//import LoginForm from "./State/Forms-Sep 4/netflixForm";
// import FuncComponent from "./State/React-Lifecycle/func-component";
import Photofilter from "./State/photoFilter-task-sep 11";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  <>
    {/* <Counters />
    <hr />
    <ToggleExample /> */}

    {/* <Names /> */}
    {/* <Products /> */}
    {/* <Todos /> */}
    {/* <DynamicForm /> */}
    {/* <ArrayCrudTodo /> */}
    {/* <LoginForm /> */}
    {/* <FuncComponent /> */}
    <Photofilter />
  </>
);
