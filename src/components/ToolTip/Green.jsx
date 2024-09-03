import React from "react";
import { TbInbox } from "react-icons/tb";
import { MdOutlineClose } from "react-icons/md";

export default function Green({ theme, info }) {
  let background = theme === "light" ? "#E7FFF3" : "#47AA5D";
  let iconColor = theme === "light" ? "#41A557" : "#C1FFCF";
  let titleColor = theme === "light" ? "#137A2A" : "#FFFFFF";
  let detailsColor = theme === "light" ? "#3C8C4E" : "#E3FFE9";
  let dismissBtn = theme === "light" ? "#3C8C4E" : "#D8D8D8";
  return (
    <>
      <div
        className="flex justify-between rounded border-transparent shadow w-96 p-4"
        style={{ background: background }}
      >
        <div className="flex w-80">
          <TbInbox
            style={{ width: 24, height: 24, marginRight: 12, color: iconColor }}
          />
          <div className="mr-4">
            <h4 className="font-medium text-sm" style={{ color: titleColor }}>
              {info.title}
            </h4>
            <p className="text-sm" style={{ color: detailsColor }}>
              {info.details}
            </p>
          </div>
        </div>

        <MdOutlineClose style={{ width: 20, height: 20, color: dismissBtn }} />
      </div>
      <div
        className="triangle-down "
        style={{
          position: "relative",
          borderLeft: "15px solid transparent",
          borderRight: "15px solid transparent",
          borderTop: `15px solid ${background}`,
          width: 0,
          height: 0,
          left: 50,
        }}
      ></div>
    </>
  );
}
