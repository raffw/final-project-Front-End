import { useEffect, useState } from "react";
import SlideCaraousel from "../Elements/atoms-caraousel/Slide-Caraousel";

const screenWidth = window.innerWidth;
const Caraousel = () => {
  const elementRef = useRef();
  const img = [
    {
      name: "https://images.tokopedia.net/img/cache/1200/NXCtjv/2023/10/12/853474a7-85ad-47a9-ae91-de3b27f7652f.jpg.webp",
    },
    {
      name: "https://images.tokopedia.net/img/cache/1190/wmEwCC/2024/3/6/31626822-c1e0-4785-932c-58b8abd86ce9.jpg.webp?ect=4g",
    },
    {
      name: "../public/image/gambar tokped 1.png",
    },
  ];

  // const carou = "caraousel.json";

  // fetch(carou)
  //   .then((result) => result.json())
  //   .then((data) => setImgSlide(data));

  // const fetchData = async () => {
  //   const data = await fetchDataCall();
  //   setMovies(data.data.results);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-[30px] absolute mx-8 mt-[150px] cursor-pointer"
        onClick={() => {
          sliderLeft(elementRef.current);
        }}
      />
      <HiChevronRight
        className="hidden md:block text-[30px] absolute mx-8 mt-[150px] right-0 cursor-pointer"
        onClick={() => {
          sliderRight(elementRef.current);
        }}
      />

      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {img.map((item, index) => (
          <SlideCaraousel name={item.name} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Caraousel;
