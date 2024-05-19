import Card from "../Elements/atoms-sekitar/Card";
import SlideButt from "../Elements/atoms-sekitar/Slide-Button";
import MoreButt from "../Elements/atoms-sekitar/Lebih-Banyak";

const Terlaris = () => {
  return (
    <div>
      <div class="flex justify-between px-4 font-poppins items-center">
        <h1 class="font-bold text-xl">Terlaris hari ini</h1>
        <SlideButt></SlideButt>
      </div>
      <div className="grid grid-cols-5 m-4 gap-2">
        <Card></Card>
      </div>
      <div className="flex justify-center py-10">
        <MoreButt></MoreButt>
      </div>
    </div>
  );
};

export default Terlaris;
