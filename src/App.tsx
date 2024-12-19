import { useState } from "react";
import "./App.css";
import { HorizontalLayout } from "./HorizontalLayout";
import { VerticalLayout } from "./VerticalLayout";

function App() {
  const [activeLayout, setActiveLayout] = useState<"horizontal" | "vertical">(
    "horizontal"
  );

  const toggleActiveLayout = () => {
    setActiveLayout((state) =>
      state === "horizontal" ? "vertical" : "horizontal"
    );
  };

  return (
    <div
      style={{
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: "1rem",
        width: "100%",
      }}
    >
      <button onClick={toggleActiveLayout}>Toggle</button>
      {activeLayout === "horizontal" ? (
        <HorizontalLayout />
      ) : (
        <VerticalLayout />
      )}
    </div>
  );
}

export default App;
