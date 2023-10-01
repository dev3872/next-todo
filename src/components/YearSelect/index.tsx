"use client";

import React from "react";

export default function YearSelect({
  items,
  active,
  setDate,
}: {
  items: Array<string>;
  active: string;
  setDate: (num: string) => void;
}) {
  return (
    <div className="w-max h-max flex flex-col justify-center items-center">
      {items.map((item, index) => (
        <div
          onClick={() => setDate((index + 1).toString())}
          className={`w-32 h-10 text-xl text-white rounded-md relative ${
            item === active ? "bg-blue-800" : ""
          }`}
          style={{
            textAlign: "center",
            margin: "10px 20px",
            lineHeight: "40px",
            cursor: "pointer",
          }}
          key={item}
        >
          {item}
          {item === active ? (
            <div
              className="absolute"
              style={{
                right: "-20px",
                top: "20%",
                width: "24px",
                height: "24px",
                background: "white",
                clipPath: "polygon(70% 50%, 100% 80%, 100% 20%)",
              }}
            ></div>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
}
