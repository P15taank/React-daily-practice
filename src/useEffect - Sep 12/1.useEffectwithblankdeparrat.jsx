import { useEffect, useState } from "react";

const FunMounting = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Run only once");
  }, []);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>Deccrement</button>
    </div>
  );
};

export default FunMounting;
