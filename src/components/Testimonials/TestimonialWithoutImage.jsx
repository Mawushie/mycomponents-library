import React from "react";

export default function TestimonialWithoutImage({
  logo,
  name,
  company,
  position,
  children,
}) {
  return (
    <>
      <div className="flex flex-col bg-sl max-w-96 border-0 font-inter shadow xl:hidden ">
        <div className="max-w-44 self-center mb-10 mt-10">
          <img src={logo} />
        </div>

        <div className="p-4 mb-3">
          <p className="mb-8 font-medium text-2xl">"{children}"</p>
          <p className="font-medium text-base">{name}</p>
          <p className="font-medium text-base text-mygray">
            {company}, {position}
          </p>
        </div>
        <div className="max-w-52">
          <img src="DotPattern.png" />
        </div>
      </div>
      <div className="hidden xl:flex gap-10 border-0 shadow  ">
        <div className="flex items-end">
          <img src="DotPattern2.png" />
        </div>
        <div className="flex flex-col items-center p-10">
          <img src={logo} />
          <p className="m-8 font-medium text-2xl">"{children}"</p>

          <p className="font-medium text-base text-mygray">
            {name} <div className="slanted-divider mx-1"></div> {company},
            {` ${position}`}
          </p>
        </div>
      </div>
    </>
  );
}
