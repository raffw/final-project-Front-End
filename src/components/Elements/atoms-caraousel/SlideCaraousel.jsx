import React from "react";

function SlideCaraousel({ name }) {
  return (
    <img
      src={name}
      alt=""
      className="min-w-full h-56 md:h-[310px]
    object-left-top mr-5 rounded-md "
    />
  );
}

export default SlideCaraousel;
