// dark theme implementation

import { createContext, useEffect, useState } from "react";

// First define the context
export const aContext = createContext(null);

//  second - define a provider
const AProvider = aContext.Provider;

const AWithContext = () => {
  const [counter, setCounter] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = darkTheme ? "#000" : "#fff";
  }),
    [darkTheme];

  return (
    // Third - wrap the component with the provider
    <AProvider
      value={{
        counter: counter,
        uName: "Pratiksha",
        uCountry: "India",
        setCounter,
        darkTheme,
      }}
    >
      <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
      <buttono onClick={() => setDarkTheme((val) => !val)} g>
        Toggle
      </buttono>
      <h1 style={{ color: darkTheme ? "#fff" : "#000" }}>Counter: {counter}</h1>
    </AProvider>
  );
};

export default AWithContext;
