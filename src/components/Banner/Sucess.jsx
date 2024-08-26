import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

export default function Sucess({ info }) {
  const { title, description } = info;
  return (
    <div className="flex p-3 gap-3 border-0 rounded-md success justify-start items-start">
      <FaCircleCheck color="#34D399" />
      <div className="flex flex-col">
        {title && <h6 className="text-sm font-medium">{title}</h6>}
        {description && <p className="text-sm">{description}</p>}
      </div>
    </div>
  );
}
