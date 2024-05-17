const Card = (props) => {
  const card = props.cards;
  console.log(card);
  return (
    <div className="p-0 font-poppins group-hover: scale-[0.95] hover:!scale-100 duration-300 text-sm border-2 border-grey rounded-xl h-78 w-52">
      <a href="../pages/FoodDetail.jsx">
        <img
          src="../assets/fried-rice-631188_1280.jpg"
          alt=""
          className="rounded-xl h-48 w-52"
        />
        <div>
          <div className="p-4">
            <h1 className="text-xs p-0 text-hijau-muda py-2">5 tersedia</h1>
            <h1 className="font-semibold">Nasi Goreng</h1>
            <h1 className="text-xs py-2">Ambil hari ini, 21.00-22.00</h1>
            <h1 className="flex gap-1">
              50%<span className="line-through">30.000</span>15.000
            </h1>
          </div>
          <h1 className="flex bottom-0 h-full px-4 text-xs ">
            <img src="../icon/Star 1.svg" alt="" />
            <img src="../icon/Star 1.svg" alt="" />
            <img src="../icon/Star 1.svg" alt="" />
            <img src="../icon/Star 1.svg" alt="" />
            <img src="../icon/Star 1.svg" alt="" />
            5.0 | 10x Terjual
          </h1>
        </div>
      </a>
    </div>
  );
};

export default Card;
