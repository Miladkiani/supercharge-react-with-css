import { FunctionComponent } from "react";
import { HeavyComponentOne } from "./HeavyComponentOne";
import { HeavyComponentTwo } from "./HeavyComponentTwo";
import { HeavyComponentThree } from "./HeavyComponentThree";

interface VerticalLayoutPropsType {}

export const VerticalLayout: FunctionComponent<
  VerticalLayoutPropsType
> = () => {
  return (
    <div
      style={{
        display: "grid",
        gap: "1rem",
        gridTemplateRows: "1fr 1fr 1fr",
        overflow: "hidden",
        flex: "1",
        width: "100%",
      }}
    >
      <HeavyComponentOne />
      <HeavyComponentTwo />
      <HeavyComponentThree />
    </div>
  );
};
