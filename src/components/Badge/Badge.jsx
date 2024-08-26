import React from "react";

export default function Badge({ type = "square", color = "gray", children }) {
  const badgeType = type === "pill" ? "pill" : "square";
  return (
    <div
      className={`inline-flex justify-center items-center border-0  px-3 py-1 font-inter font-medium text-sm ${badgeType} ${color}`}
    >
      {children}
    </div>
  );
}
