import React from "react";
import Success from "./Success";
import Warning from "./Warning";
import Information from "./Information";
import Error from "./Error";

export default function Toast({ status, ...rest }) {
  return (
    <>
      {status === "success" && <Success info={rest} />}
      {status === "warning" && <Warning info={rest} />}
      {status === "information" && <Information info={rest} />}
      {status === "error" && <Error info={rest} />}
    </>
  );
}
