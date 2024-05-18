const CardItem = () => {
    return(
        <>
            <div className="mt-2">
                <h1 className="text-lg font-bold">Sebuah Judul Item Lengkap</h1>
                <div className="flex font-sans text-sm space-x-4">
                    <p>Terjual 50+</p>
                    <p>|</p>
                    <div className="flex">
                        <svg className="unf-icon inline-block mr-2 mt-1 align-middle stroke-amber-500" viewBox="0 0 24 24" width="16" height="16" fill="var(--NN600, #6D7588)">
                            <path d="M7.62 20.74A2.381 2.381 0 0 1 5.27 18l.64-3.73-2.71-2.69a2.39 2.39 0 0 1 1.32-4.07L8.27 7 10 3.57a2.38 2.38 0 0 1 4.27 0L15.9 7l3.74.54A2.39 2.39 0 0 1 21 11.58l-2.72 2.64.61 3.78a2.37 2.37 0 0 1-.89 2.29 2.41 2.41 0 0 1-2.52.18l-3.35-1.76-3.4 1.76a2.42 2.42 0 0 1-1.11.27Zm4.46-17a.87.87 0 0 0-.79.5l-2 4.1L4.74 9a.89.89 0 0 0-.49 1.51l3.27 3.19-.77 4.51a.87.87 0 0 0 .35.86.89.89 0 0 0 .94.07l4-2.13 4 2.13a.89.89 0 0 0 1.29-.93l-.78-4.51 3.28-3.19a.89.89 0 0 0-.4-1.51l-4.53-.66-2-4.1a.88.88 0 0 0-.82-.5Z">
                            </path>
                        </svg>
                        <p>5 (30 Rating)</p>
                    </div>
                </div>
                <div className="my-3">
                    <h1 className="text-3xl font-bold ">Rp134.000</h1>
                    <div className="flex space-x-1 py-2">
                        <p className="font-bold bg-orange-400 rounded-md text-darkGreen px-1">21%</p>
                        <p className="line-through bg-gray-300">Rp169.000</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default CardItem;
