import Grid from "../../atoms/Homepages/atoms-category/grid"
import SurplusPay from "../../atoms/Homepages/atoms-category/Surplus-pay"
import Voucher from "../../atoms/Homepages/atoms-category/Voucher"
import Bonus from "../../atoms/Homepages/atoms-category/Bonus-Coin"

const Category = () => {
  return (
    <div className="h-60 m-4 border-2 border-grey rounded-xl flex-col items-center">
      <div className="flex font-poppins font-bold text-lg p-4 justify-between ">
        <h1>Kategori Pilihan</h1>
        <h1 className="w-1/2">Top Up & Voucher</h1>
      </div>
      <div className="h-44 flex gap-3 items-center p-4  justify-between">
        <Grid></Grid>
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
