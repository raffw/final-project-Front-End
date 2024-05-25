const Grid = ({ name, image }) => {
  return (
    <div className="w-30 h-28 cursor-pointer flex flex-col text-center bg-slate-200 "> 
      <img src={image} alt="" className="rounded-lg w-full h-20" />
      <h2 className="w-full">{name}</h2>
    </div>
  );
};

export default Grid;
