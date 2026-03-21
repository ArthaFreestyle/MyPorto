"use client";

import React from "react";


export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    image: string;
  }[];
}) => {
 
  return (
    <>
      {items.map((item, idx) => (
        <div
        key={idx}
          className="group relative -mr-1"
        >
          <img
            height={100}
            width={100}
            src={item.image}
            className="relative !m-0 h-7 w-7 rounded-full border-2 border-black object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105"
          />
        </div>
      ))}
    </>
  );
};
