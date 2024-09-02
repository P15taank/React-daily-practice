import { useState } from "react";
const ToggleExample = () => {
  const [light, setLight] = useState(false); //state defined

  return (
    <>
      <p style={{ color: light ? "green" : "red" }}>
        State: {light ? "On" : "Off"}
      </p>
      <button onClick={() => setLight(!light)}>
        {light ? "Turn On" : "Turn Off"}
      </button>
    </>
  );
};

export default ToggleExample;
