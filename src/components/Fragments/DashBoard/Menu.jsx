import MenuList from "./MenuList";

const Menu = () => {
  const resto = [
    {
      name: "Rekomendasi Acak",
    },
    {
      name: "Restoran Terdekat",
    },
    {
      name: "Di Sekitar Kamu",
    },
    {
      name: "Paling Disukai",
    },
  ];

  return (
    <div>
      {resto.map((item, index) => (
        <div class="flex flex-col px-16 font-poppins">
          <div className="flex justify-between">
            <h1 class="font-bold text-xl">{item.name}</h1>
            <button class="border-2 w-24 p-1 rounded-xl bg-hijau-muda border-hijau-muda text-hijau font-bold py-2">
              Semua
            </button>
          </div>
          <div>
          <MenuList />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
