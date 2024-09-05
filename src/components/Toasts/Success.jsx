import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { createPortal } from "react-dom";

export default function Success({ info }) {
  const { title, details } = info;

  return (
    <>
      {createPortal(
        <div
          className="flex gap-3 p-4 text-sm font-medium font-inter border-transparent rounded shadow max-w-96 toast"
          style={{ background: "#ECFDF5" }}
        >
          <CiCircleCheck style={{ width: 24, height: 24, color: "#34D399" }} />
          <div>
            <h4 style={{ color: "#065F46" }}>{title}</h4>
            <p style={{ color: "#047857" }}>{details}</p>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
