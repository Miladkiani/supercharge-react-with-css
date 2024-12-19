import { FunctionComponent } from "react";
import { HeavyComponentOne } from "./HeavyComponentOne";
import { HeavyComponentThree } from "./HeavyComponentThree";
import { HeavyComponentTwo } from "./HeavyComponentTwo";

interface HorizontalLayoutPropsType {}

export const HorizontalLayout: FunctionComponent<
  HorizontalLayoutPropsType
> = () => {
  return (
    <div
      style={{
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "1fr 1fr 1fr",
        overflow: "hidden",
        flex: "1",
        height: "100%",
      }}
    >
      <HeavyComponentOne />
      <HeavyComponentTwo />
      <HeavyComponentThree />
    </div>
  );
};
