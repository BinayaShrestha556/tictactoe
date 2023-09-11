import React from "react";

function Square(props) {
  return (
    <div>
      <div
        onClick={props.onclick}
        className={`text-5xl 3xl:w-36 2xl:w-32 xl:w-28 lg:w-28 md:w-24 sm:w-20 aspect-square ${props.border} text-[#3b3d49] border-[#5fbae0]  flex items-center justify-center`}
      >
        {props.value}
      </div>
    </div>
  );
}

export default Square;
