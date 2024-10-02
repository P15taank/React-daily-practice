import { useContext } from "react";
import { aContext } from "./A";
import D from "./D";
const C = () => {
  const aData = useContext(aContext);
  return (
    <div>
      <h1 style={{ color: aData.darkTheme ? "#fff" : "#000" }}>I am B</h1>
      <D />
    </div>
  );
};

export default C;
