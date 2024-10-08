import { useEffect, useState } from "react";

const FuncComponent = () => {
  const [counter, setCounter] = useState(0);
  const [uName, setUName] = useState("NA");

  //useEffect is alternative of componentDidmount
  useEffect(() => {
    console.log("Mouting done");
    //const userName = localStorage.getItem("uName");
    const userName = "Pratiksha";
    if (userName) {
      setUName(userName);
    }
  }, []);

  console.log("Re-Render: ", counter, uName);
  return (
    <div>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
      <h1>Welcome to class component: {counter}</h1>
      <p>UserName: {uName}</p>
    </div>
  );
};

export default FuncComponent;
