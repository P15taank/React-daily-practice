import { useContext } from "react";
import { aContext } from "./A";

const D = () => {
  const aData = useContext(aContext);
  return (
    <div>
      <h1 style={{ color: aData.darkTheme ? "#fff" : "#000" }}>I am B</h1>
    </div>
  );
};

export default D;
