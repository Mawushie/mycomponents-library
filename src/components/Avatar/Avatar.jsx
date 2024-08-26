import React from "react";
import { IoPersonSharp } from "react-icons/io5";

export default function Avatar({ children, src, alt }) {
  //set up an array of random colors
  //use Math.random to choose the colors
  //add to class for display
  const backgroundColors = ["navy", "pink", "red", "blue", "green"];

  let avatarDisplay;

  if (src && alt) {
    avatarDisplay = (
      <div className="avatar">
        <img src={src} alt={alt} />
      </div>
    );
  } else if (children) {
    avatarDisplay = <div className="avatar avatar-letters">{children}</div>;
  } else {
    let randomColor =
      backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

    avatarDisplay = (
      <div className={`avatar ${randomColor}`}>{<IoPersonSharp />}</div>
    );
  }
  return <>{avatarDisplay}</>;
}
