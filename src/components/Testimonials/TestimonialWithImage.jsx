import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

export default function TestimonialWithImage({
  image,
  name,
  company,
  position,
  children,
}) {
  return (
    <>
      <div className="flex flex-col bg-sl max-w-96 border-0 font-inter relative  shadow xl:hidden">
        <div className="max-w-80 h-52 border border-transparent  self-center  absolute testimonial-image">
          <img src={image} className="rounded-lg" />
        </div>

        <div className="p-4 mt-28 testimonial">
          <BiSolidQuoteAltLeft
            style={{ width: 48, height: 48, opacity: 0.5, marginTop: 120 }}
          />

          <p className="mb-8 font-medium text-2xl mt-6">{children}</p>
          <p className="font-medium text-base">{name}</p>
          <p className="font-medium text-base">
            {company}, {position}
          </p>
        </div>
      </div>

      {/*desktop*/}
      <div className="hidden testimonial-container px-16 gap-12 xl:flex">
        <div className="testimonial-image-container">
          <img src={image} />
        </div>

        <div className="content flex flex-col justify-between">
          <BiSolidQuoteAltLeft style={{ opacity: 0.5 }} />
          <p className="font-medium text-2xl my-6">{children}</p>
          <p className="font-medium text-base">{name}</p>
          <p className="font-medium text-base">
            {company}, {position}
          </p>
        </div>
      </div>
    </>
  );
}
