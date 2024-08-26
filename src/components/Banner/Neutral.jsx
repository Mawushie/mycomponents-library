import React from "react";
import { HiMiniInformationCircle } from "react-icons/hi2";

export default function Error({ info }) {
  const { title, description } = info;
  return (
    <div className="flex p-3 gap-3 border-0 rounded-md neutral justify-start items-start">
      <HiMiniInformationCircle color="#60A5FA" />
      <div className="flex flex-col">
        {title && <h6 className="text-sm font-medium">{title}</h6>}
        {description && <p className="text-sm">{description}</p>}
      </div>
    </div>
  );
}
