import ButtLog from "../../Elements/navbar/Button-nav";
import SearchBar from "../../Elements/navbar/Search-bar";

const Navbar = () => {
  return (
    <nav>
      <div className="bg-hijau-muda p-0 m-0 flex justify-between py-4 items-center">
        <div className="flex-col px-4">
          <a href="#" className="flex font-poppins text-white">
            Hi, username
          </a>
          <a href="#" className="font-bold text-white">
            Start
          </a>
        </div>
        <SearchBar></SearchBar>
        <div className="flex gap-4 px-4 items-center">
          <a href="">
            <img src="../icon/basket.svg" className="w-9" alt="" />
          </a>
          <ButtLog></ButtLog>
        </div>
      </div>
      <div className="bg-stroke rounded-b-xl px-4 flex justify-between p-1 ">
        <a href="">Naikkan levelmu disini! Transaksi 0 lagi !</a>
        <a href="" className="flex gap-2">
          Atur Lokasi
          <img src="../icon/Vector.svg" alt="" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
