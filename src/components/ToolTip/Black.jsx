import React from "react";
import { TbInbox } from "react-icons/tb";
import { MdOutlineClose } from "react-icons/md";

export default function Black({ theme, info }) {
  let background = theme === "light" ? "#FFFFFF" : "#262626";
  let iconColor = theme === "light" ? "#6B7280" : "#C7C7C7";
  let titleColor = theme === "light" ? "#111827" : "#FFFFFF";
  let detailsColor = theme === "light" ? "#6B7280" : "#C7C7C7";
  let dismissBtn = theme === "light" ? "#6B7280" : "#C7C7C7";
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
    </>
  );
}
