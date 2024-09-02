import { useState } from "react";

const Counters = () => {
  const [count, setCount] = useState(0);

  // without mantainining previous state
  const onCountChange = () => {
    setCount(count + 1); // 0+1
    setCount(count + 1); // 0+1
    setCount(count + 1); // 0+1
    setCount(count + 1); // 0+1
    setCount(count + 1); // 0+1
    setCount(count + 1); // 0+1

    // with mainintaining previous state
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);

    setCount((prevState) => {
      console.log("1: ", prevState);
      return prevState + 1;
    });

    setCount((prevState) => {
      console.log("2: ", prevState);
      return prevState + 1;
    });

    setCount((prevState) => {
      console.log("3: ", prevState);
      return prevState + 1;
    });

    setCount((prevState) => {
      console.log("4: ", prevState);
      return prevState + 1;
    });
    console.log("Count:", count);
  };
  console.log("Re-Rendering Count:", count);
  // UI code
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={onCountChange}>Increment</button>
    </div>
  );
};

export default Counters;
