import React from "react";
import { PiWarningCircleLight } from "react-icons/pi";
import { createPortal } from "react-dom";

export default function Warning({ info }) {
  const { title, details } = info;

  return (
    <>
      {createPortal(
        <div
          className="flex gap-3 p-4 text-sm font-medium font-inter border-transparent rounded shadow max-w-96 toast"
          style={{ background: "#FFFBEB" }}
        >
          <PiWarningCircleLight
            style={{ width: 24, height: 24, color: "#FBBF24" }}
          />
          <div>
            <h4 style={{ color: "#92400E" }}>{title}</h4>
            <p style={{ color: "#B45309" }}>{details}</p>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
