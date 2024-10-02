import { useState } from "react";
import ChildCounter from "./child";

const ParentCounter = () => {
  const [counter, setCounter] = useState(10);

  const onIncrement = (num) => {
    setCounter((val) => val + num);
  };
  const onDecrement = (numdec) => {
    if (counter === 1) {
      return;
    }
    setCounter((val) => val - numdec);
  };

  return (
    <div>
      {/* prop passing from child to parent */}
      <ChildCounter
        myCounter={counter}
        ankitIncrement={() => onIncrement(2)} //increment by 2 by passing argument to arrow function
        ankitDecrement={() => onDecrement(2)}
      />
      <hr />
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement} disabled={counter === 1}>
        Decrement
      </button>
    </div>
  );
};

export default ParentCounter;
