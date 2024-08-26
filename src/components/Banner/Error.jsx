import React from "react";
import { MdCancel } from "react-icons/md";

export default function Error({ info }) {
  const { title, description } = info;
  return (
    <div className="flex p-3 gap-3 border-0 rounded-md error justify-start items-start">
      <MdCancel color="#F87171" />
      <div className="flex flex-col">
        {title && <h6 className="text-sm font-medium">{title}</h6>}
        {description && <p className="text-sm">{description}</p>}
      </div>
    </div>
  );
}
