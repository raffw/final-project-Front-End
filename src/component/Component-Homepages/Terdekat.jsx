import Card from "../../atoms/Homepages/atoms-sekitar/Card";
import SlideButt from "../../atoms/Homepages/atoms-sekitar/Slide-Button";

const Terdekat = () => {
  return (
    <div>
      <div class="flex justify-between px-4 font-poppins items-center">
        <h1 class="font-bold text-xl">Restoran Terdekat</h1>
        <SlideButt></SlideButt>
      </div>
      <div className="grid grid-cols-5 m-4 gap-2">
        <Card></Card>
      </div>
    </div>
  );
};

export default Terdekat;
