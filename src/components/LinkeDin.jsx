import React from "react";
import Lottie from "lottie-react";
import dataAnim from "../lottie/LinkedinLogo.json"; // ✅ your uploaded animation

const LinkedinAnimation = () => {
  return (
    <div className=" flex justify-center justify-items-center items-center">
        <p className="text-black">Our Latest</p>
    <Lottie
      animationData={dataAnim}
      loop={true}
      style={{ width: 150, height: 150 }}
    />
    <p>Updates</p>
    </div>
  );
};

export default LinkedinAnimation;
