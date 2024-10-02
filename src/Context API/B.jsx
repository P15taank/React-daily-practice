import { useContext } from "react";
import { aContext } from "./A";
import C from "./C";
const B = () => {
  const aData = useContext(aContext);
  return (
    <div>
      <h1 style={{ color: aData.darkTheme ? "#fff" : "#000" }}>I am B</h1>
      <C />
    </div>
  );
};

export default B;
