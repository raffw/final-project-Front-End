import { useState } from "react";

export default function SlideCaraousel(props) {
  const slide = props.Caro;
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="h-56">
      <div>
        <img src={slide.gambar1} alt="" />
      </div>
    </div>
  );
}
