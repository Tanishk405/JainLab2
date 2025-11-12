import React from "react";
import Lottie from "lottie-react";
import origamiData from "../lottie/JainImpactLabAnimation.json";

const OrigamiAnimation = () => {
  return (
    <div
      className="relative flex justify-center items-center mx-auto mb-10"
      style={{
        width: "100%",
        maxWidth: "520px", // ✅ bird size bada
        aspectRatio: "1/1",
        overflow: "visible",
        background: "transparent",
      }}
    >
      {/* Subtle glowing effect behind bird */}
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
        }}
      ></div>

      {/* Lottie Bird Animation */}
      <Lottie
        animationData={origamiData}
        loop={true}
        style={{
          width: "120%", // ✅ scale up bird size
          height: "120%",
          background: "transparent",
          transform: "scale(1.2)", // ✅ slightly zoomed look
        }}
      />
    </div>
  );
};

export default OrigamiAnimation;
