import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

export default function Card({
  icon = <IoCloudUploadOutline color="#ffffff" size={24} />,
  iconBgColor,
  title,
  description,
}) {
  const styles = iconBgColor
    ? { background: iconBgColor }
    : { background: "#3F75FE" };
  console.log(iconBgColor);
  return (
    <div className="max-w-96 flex flex-col gap-8 bg-offwhite border-0 rounded relative items-center justify-around w p-6 shadow-sm hover:rotate-2 ">
      <div
        className="flex justify-center items-center absolute icon w-12 h-12 rounded"
        style={styles}
      >
        {icon}
      </div>

      <h3 className="mt-8 font-inter font-medium">{title}</h3>
      <p className="font-inter text-center text-mygray">{description}</p>
    </div>
  );
}
