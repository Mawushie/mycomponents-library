import React from "react";
import Sucess from "./Sucess";
import Warning from "./Warning";
import Neutral from "./Neutral";
import Error from "./Error";

export default function Banner({ status, ...rest }) {
  return (
    <>
      {status === "success" && <Sucess info={rest} />}
      {status === "warning" && <Warning info={rest} />}
      {status === "error" && <Error info={rest} />}
      {status === "neutral" && <Neutral info={rest} />}
    </>
  );
}
