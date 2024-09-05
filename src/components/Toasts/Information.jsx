import React from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { createPortal } from "react-dom";

export default function Information({ info }) {
  const { title, details } = info;

  return (
    <>
      {createPortal(
        <div
          className="flex gap-3 p-4 text-sm font-medium font-inter border-transparent rounded shadow max-w-96 toast"
          style={{ background: "#EFF6FF" }}
        >
          <HiOutlineInformationCircle
            style={{ width: 24, height: 24, color: "#60A5FA" }}
          />
          <div>
            <h4 style={{ color: "#1E40AF" }}>{title}</h4>
            <p style={{ color: "#1C51B9" }}>{details}</p>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
