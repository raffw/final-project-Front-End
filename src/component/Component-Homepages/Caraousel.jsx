import { useEffect, useState } from "react";
import SlideCaraousel from "../../atoms/Homepages/atoms-caraousel/Slide-Caraousel";

const Caraousel = () => {
  const [imgSlide, setImgSlide] = useState([]);

  const carou = "caraousel.json";

  fetch(carou)
    .then((result) => result.json())
    .then((data) => setImgSlide(data));

  // const fetchData = async () => {
  //   const data = await fetchDataCall();
  //   setMovies(data.data.results);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="relative h-56 rounded-lg md:h-96 ">
      <div className="w-full">
        {imgSlide.map((item, index) => {
          <SlideCaraousel Caro={item} key={index}></SlideCaraousel>;
        })}
      </div>
    </div>
  );
};

export default Caraousel;
