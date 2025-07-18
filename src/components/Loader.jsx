import { Html, useProgress } from "@react-three/drei";
import { useEffect } from "react";

const CanvasLoader = ({ onFinish }) => {
  const { progress } = useProgress();

  useEffect(() => {
    if (progress >= 100 && onFinish) {
      const timeout = setTimeout(() => {
        onFinish();
      }, 300); // give a smooth transition
      return () => clearTimeout(timeout);
    }
  }, [progress, onFinish]);

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: 50,
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: "#888",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
