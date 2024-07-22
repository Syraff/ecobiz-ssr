import React from "react";

export default function Title({ title }) {
  return (
    <>
      <div className="flex items-center mb-5 gap-x-5">
        <p className="text-lg lg:text-2xl text-red font-bold italic uppercase w-fit">
          {title}
        </p>
        <div className="grow">
          <div className="bg-red w-full h-[1px]"></div>
        </div>
      </div>
    </>
  );
}
