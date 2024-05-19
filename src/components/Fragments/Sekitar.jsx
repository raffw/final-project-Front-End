import { useEffect, useState } from "react";
import Card from "../Elements/atoms-sekitar/Card";
import SlideButt from "../Elements/atoms-sekitar/Slide-Button";
// import { fetchCardCall } from "../../Services/Card-Service";
// import { fetchCardCall } from "../../Services/Card";

const Sekitar = () => {
  const [sekitar, setSekitar] = useState([]);
  const fetchCard = async () => {
    const dataCard = await fetchCardCall();
    setSekitar(dataCard.data);
  };

  useEffect(() => {
    // fetchCard();
  }, []);

  // console.log(sekitar)

  return (
    <div>
      <div class="flex justify-between px-4 font-poppins items-center">
        <h1 class="font-bold text-xl">Di Sekitar Kamu</h1>
        <SlideButt></SlideButt>
      </div>
      <div className="grid grid-cols-5 m-4 gap-2">
        {/* {sekitar.map((item, index)=> (
          <Card cards={item} key={index}></Card>
        ))} */}
      </div>
    </div>
  );
};

export default Sekitar;
