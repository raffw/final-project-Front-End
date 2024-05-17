

const SearchBar = () => {
  return (
    <div className="border bg-white flex justify-between px-5 text-hijau-muda items-center rounded-3xl w-3/5 h-10 ">
      <input type="text" className="w-full outline-none" placeholder="Mau selamatkan makanan apa hari ini ?" />
      <a href=""><img src="../icon/search.svg" alt=""/></a>
    </div>
  );
};

export default SearchBar;
