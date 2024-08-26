import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

export default function Warning({ info }) {
  const { title, description } = info;
  return (
    <div className="flex p-3 gap-3 border-0 rounded-md warning justify-start items-start">
      <FaExclamationTriangle color="#FBBF24" />
      <div className="flex flex-col">
        {title && <h6 className="text-sm font-medium">{title}</h6>}
        {description && <p className="text-sm">{description}</p>}
      </div>
    </div>
  );
}
