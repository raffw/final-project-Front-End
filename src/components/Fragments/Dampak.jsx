import Save from "../Elements/atoms-dampak/Save";
import Co2 from "../Elements/atoms-dampak/Co2";
import Loss from "../Elements/atoms-dampak/Loss";

const Dampak = () => {
  return (
    <div>
      <div class="flex justify-center font-poppins font-bold text-2xl p-4 ">
        <div>
          <h1 class="text-hijau">Dampak yang telah dihasilkan</h1>
          <h1 class="flex justify-center text-xl text-hijau-muda">
            #Surplus Hero
          </h1>
        </div>
      </div>
      <div className="h-72 m-4 flex justify-between px-11 items-center border-2 border-grey rounded-2xl">
        <Save></Save>
        <Co2></Co2>
        <Loss></Loss>
      </div>
    </div>
  );
};

export default Dampak;
