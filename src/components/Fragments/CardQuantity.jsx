const CardQuantity = () => {
    return (
        <>
            <div className="bg-gradient-to-b from-white to-midGreen text-sm flex rounded-md justify-center">
                <img className="w-20 mb-2 mt-4" src="/public/image/beli-sekarang.png" alt="Logo beli" />
                <p className="mt-8 font-serif">Pastikan datamu sudah benar, yaa! Ini adalah halaman terakhir dari transaksi kamu.
                 </p>
            </div>
            <section id="cardHeader">
                <h2 className="py-4 font-bold">Item pembelian kamu</h2>
                <div className="flex">
                    <div className="w-8"><img src="/public/image/no-image.png" alt="badge" /></div>
                    <div className="ml-1">
                        <h2 className="font-bold">Nama Toko Resmi</h2>
                    </div>
                </div>
            <div className="flex border-b-4 mx-2 ">
                <div>
                    <img className="w-24" src="/public/image/no-image.png" alt="item-icon" />
                </div>
                <div>
                    <p className="text-lg font-serif">Nama item yang dijual</p>
                    <div className="font-Open Sauce One text-sm py-0">20gr</div>
                    <div className="flex mt-1 font-serif">
                        <div>
                            <p className="text-sm bg-red-400 px-2 rounded-md mr-2 mt-1">20%</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text line-through">Rp.9999</p>
                        </div>
                        <div>
                                <p className="font-bold ml-1">Rp.999</p>
                        </div>
                    </div>
                    <div className="mt-3 mb-4 flex">
                        <p className="text-sm font-Open font-bold text-darkGreen mt-1">Tulis Catatan</p>
                        <div className="pb-2 mx-4 text-gray-400 ">|</div>
                        <div className="flex quantity-editor bg-white border border-darkGreen rounded-lg">
                            <button aria-label="Kurangi 1" className=" mx-2 mb-2" disabled="" tabIndex="-1"><svg className="unf-icon"
                                viewBox="0 0 24 24" width="16px" height="16px" fill="var(--NN300, #BFC9D9)"
                                        style={{display: "inline-block", align: "middle"}}>
                                <path d="M20 12.75H4a.75.75 0 110-1.5h16a.75.75 0 110 1.5z"></path>
                                </svg>
                            </button>

                            <input  className="w-6 ml-4 mb-1"type="text"/> 
                            {/* aria-valuemin="1" aria-valuemax="741" data-unify="QuantityEditor"
                                    role="spinbutton"  value="1" aria-valuenow="1" /> */}

                            <button className="mx-2 mb-2">
                                <svg    className="unf-icon" 
                                        viewBox="0 0 24 24"
                                        width="16px"
                                        height="16px" 
                                        fill="var(--GN500, #00AA5B)"
                                        style={{display: "inline-block", align: "middle"}}>
                                        <path
                                             d="M20 11.25h-7.25V4a.75.75 0 10-1.5 0v7.25H4a.75.75 0 100 1.5h7.25V20a.75.75 0 101.5 0v-7.25H20a.75.75 0 100-1.5z">
                                        </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
        </div>
       </section>
       </>
    )
}
export default CardQuantity;