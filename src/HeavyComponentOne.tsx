import { FunctionComponent } from "react";

interface HeavyComponentOnePropsType {}

export const HeavyComponentOne: FunctionComponent<
  HeavyComponentOnePropsType
> = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        backgroundColor: "white",
        height: "100%",
        width: "100%",
      }}
    >
      <h1>HeavyComponentTwo</h1>
      <ul
        style={{
          flex: 1,
          overflow: "auto",
          display: "flex",
          gap: "0.5rem",
          flexDirection: "column",
        }}
      >
        {Array.from({ length: 1500 }).map((_, index) => (
          <li style={{ margin: "0" }}>{`item ${index + 1}`}</li>
        ))}
      </ul>
    </div>
  );
};
