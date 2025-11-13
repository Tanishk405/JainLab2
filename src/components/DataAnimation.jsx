import React from "react";
import Lottie from "lottie-react";
import dataAnim from "../lottie/DataInformed.json"; // ✅ your uploaded animation

const DataAnimation = () => {
  return (
    <Lottie
      animationData={dataAnim}
      loop={true}
      style={{ width: 200, height: 200, margin: "auto" }}
    />
  );
};

export default DataAnimation;
