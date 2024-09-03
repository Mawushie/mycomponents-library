import React from "react";
import Black from "./Black";
import Blue from "./Blue";
import Pink from "./Pink";
import Green from "./Green";

export default function ToolTip({ color = "black", theme = "light", ...rest }) {
  //two themes, bold and light
  //color default,  black
  //them default, light
  return (
    <>
      {color === "black" && <Black theme={theme} info={rest} />}
      {color === "blue" && <Blue theme={theme} info={rest} />}
      {color === "pink" && <Pink theme={theme} info={rest} />}
      {color === "green" && <Green theme={theme} info={rest} />}
    </>
  );
}
