import Grid from "../../Elements/category/grid";
import SurplusPay from "../../Elements/category/Surplus-pay"
import Voucher from "../../Elements/category/Voucher"
import Bonus from "../../Elements/category/Bonus-Coin"

const Category = () => {
  const categoryList = [
    {
      name: "Minuman",
      img: "../public/image/minuman.png",
    },
    {
      name: "Makanan",
      img: "../public/image/food.jpg",
    },
    {
      name: "Roti",
      img: "../public/image/roti.jpg",
    },
    {
      name: "Camilan",
      img: "../public/image/snack.jpg",
    },
    {
      name: "Buah",
      img: "../public/image/buah.jpg",
    },
    {
      name: "Sayur",
      img: "../public/image/sayur.jpg",
    },
    {
      name: "Bahan Makanan",
      img: "../public/image/daging.jpeg",
    },
    {
      name: "Makanan Vegan",
      img: "../public/image/bahan makanan.jpg",
    },
  ];


  return (
    <div className="h-60 mx-16 border-2 border-grey rounded-xl flex-col items-center">
      <div className="flex font-poppins font-bold text-lg p-4 justify-between ">
        <h1>Kategori Pilihan</h1>
        <h1 className="w-1/2">Top Up & Voucher</h1>
      </div>
      <div className="h-44 flex gap-3 items-center p-4 justify-between">
        <div className="flex gap-2 w-1/2" >
          {categoryList.map((item, index) => (
            <Grid name={item.name} key={index} image={item.img} />
          ))}
        </div>
        <div className="w-1/2 h-40  border-2 border-grey rounded-2xl flex justify-center items-center">
          <div className="flex w-full justify-between px-9 font-poppins font-semibold text-abu">
            <SurplusPay></SurplusPay>
            <Voucher></Voucher>
            <Bonus></Bonus>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
