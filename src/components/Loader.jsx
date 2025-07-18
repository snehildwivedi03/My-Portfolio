import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      center
      fullscreen
      style={{
        backgroundColor: "#050816", // Dark background to avoid white flash
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 50,
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: "#fff",
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
