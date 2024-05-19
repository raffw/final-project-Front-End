import Navbar from "../components/Fragments/Nav";
import Footer from "../components/Fragments/Footer";
import CardSeller from "../components/Fragments/CardSeller";
import CardItem from "../components/Fragments/CardItem";
import CardSpecification from "../components/Fragments/CardSpecification";
const DetailProductPage = () => {
    return (
        <>
        <section>
            <Navbar/>
        </section>
        <div className="container md:flex xl:px-40 bg-white">
                {/* <!-- section left begin --> */}
                <div className="md:w-1/3 pb-4 pt-2 pr-12">
                    <div className="bg-gradient-to-b from-white to-midGreen text-sm flex rounded-md justify-center">
                        <img className="size-full bg-gray-500 rounded-md " src="/image/no-image.png" alt="Logo beli"/>
                        
                    </div>
                    <div className="md:size-full flex my-2 gap-2 ">
                        <div className="">
                            <img className="bg-gray-500 rounded-md" src="/image/no-image.png" alt=""/>
                        </div>
                        <div className="">
                            <img className="bg-gray-500 rounded-md" src="/image/no-image.png" alt=""/>
                        </div>
                        <div className="">
                            <img className="bg-gray-500 rounded-md" src="/image/no-image.png" alt=""/>
                        </div>
                        <div className="">
                            <img className="bg-gray-500 rounded-md" src="/image/no-image.png" alt=""/>
                        </div>
                    </div>
                </div> 
                {/* <!-- section left end --> */}

            {/* <!-- section middle begin --> */}
            <div className="md:w-2/5 pb-4 pt-2">
                <div className="bg-gradient-to-b from-white to-midGreen text-sm flex rounded-md justify-center">
                    <img className="w-20 mb-2 mt-4" src="/image/beli-sekarang.png" alt="Logo beli"/>
                    <p className="mt-8 font-serif">Pastikan item pilihanmu sudah benar, yaa! Teliti kembali spesifikasi dan detail barangnya, happy shopping.
                    </p>
                </div>
                <section id="cardHeader">
                    <CardSeller/>
                    <CardItem/>
                </section>
                <section id="payment-card" className="">
                    <div className="font-open">
                        <CardSpecification/>      
                    </div>
                </section>
            </div> 
            
            {/* <!-- section middle end --> */}

                {/* <!-- section right begin --> */}
                <div className="ml-12 md:w-64 mt-2">
                    <div className="border rounded-lg shadow-md">
                    <section>
                        <div className=" border-b-2 border-midGreen">
                        <div className="xl:flex flex-wrap border rounded-md text-center px-2 py-1 md:w-48 mb-4 mx-7 my-4 justify-between ">
                            <div className="mb-2 ml-1 mt-2 font-bold text-sm font-serif">
                            Ambil Promomu!
                            </div>
                            <div className="mr-2 mt-1 inline-block align-middle"><svg className="unf-icon" viewBox="0 0 24 24" width="22" height="22"
                                fill="var(--color-icon-enabled, #2E3137)">
                                <path
                                d="M12 15.25a.74.74 0 01-.53-.22l-5-5A.75.75 0 017.53 9L12 13.44 16.47 9a.75.75 0 011.06 1l-5 5a.74.74 0 01-.53.25z">
                                </path>
                            </svg>
                            </div>
                        </div>
                    </div>
                    <div className="border-b mx-2">
                        <p className="font-bold pt-3 px-4">Atur Jumlah Item</p>
                        <div className="flex justify-between mx-6 mb-3 text-gray-500">
                            <div className="flex mx-2 ">
                            <div>
                                <div className="flex mt-1 font-serif">
                                <div>
                                    <div>
                                    <p className="text-bold px-1 text-darkGreen rounded-md mr-2 mt-3">Disc:</p>
                                    </div>
                                    <div>
                                    <p className="text-bold text-lg px-1 text-darkGreen rounded-md mr-2 mt">Subtotal:</p>
                                    </div>
                                    
                                </div>
                                <div className="mt-3">
                                    <div>
                                    <p className="text-gray-400 text line-through">Rp.99999</p>
                                    </div>
                                    <div>
                                    <p className="font-bold ml-1">Rp.9996</p>
                                    </div>
                                </div>
                                
                                </div>
                                <div className="flex">
                                <div className="mt-3 mb-4 flex">
                                    <p className="text-sm font-Open font-bold text-darkGreen">Tulis Catatan</p>
                                    <div className="pb-2 mx-4 text-gray-400 ">|</div>
                                </div> 
                                <div className="flex bg-white border border-darkGreen rounded-lg h-10 mt-2">
                                    <button aria-label="Kurangi 1" className="align-middle inline-block mx-1 mb-1" disabled="" tabindex="-1"><svg className="unf-icon mt-1"
                                        viewBox="0 0 24 24" width="16px" height="16px" fill="var(--NN300, #BFC9D9)">
                                        <path d="M20 12.75H4a.75.75 0 110-1.5h16a.75.75 0 110 1.5z"></path>
                                    </svg>
                                    </button>
                                    <input className="w-6 ml-4 mb-1" aria-valuemin="1" aria-valuemax="741" data-unify="QuantityEditor"
                                    role="spinbutton" type="text" value="1" aria-valuenow="1"/>
                        
                                    <button aria-label="Tambah 1" className="mx-1 mb-2 align-middle inline-block" tabindex="-1"><svg className="unf-icon mt-1" viewBox="0 0 24 24"
                                        width="16px" height="16px" fill="var(--GN500, #00AA5B)">
                                        <path
                                        d="M20 11.25h-7.25V4a.75.75 0 10-1.5 0v7.25H4a.75.75 0 100 1.5h7.25V20a.75.75 0 101.5 0v-7.25H20a.75.75 0 100-1.5z">
                                        </path>
                                    </svg>
                                    </button>
                                </div>                     
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex border rounded-lg bg-midGreen py-3 mx-4 my-4 justify-center">
                        <svg className="unf-icon inline-block mr-2 align-middle" viewBox="0 0 24 24" width="24" height="24" fill="#FFFFFF" ><path fill-rule="evenodd" clip-rule="evenodd" d="M17.641 5.18a3.46 3.46 0 001.439.37 1.68 1.68 0 011.61 1.84v3.5c0 5.42-3.37 8.21-6.69 10.21a3 3 0 01-2.01.64 3.7 3.7 0 01-2-.6c-4.05-2.33-6.76-4.97-6.76-10.25v-3.5a1.75 1.75 0 011.65-1.84 3.57 3.57 0 002.41-1.26 6.46 6.46 0 014.69-2.05 5.9 5.9 0 014.51 2 3.46 3.46 0 001.151.94zM13.23 19.89c4.25-2.61 6-5.21 6-9l.02-3.5c0-.08-.01-.34-.15-.34a4.89 4.89 0 01-3.62-1.72A4.42 4.42 0 0012 3.74a5 5 0 00-3.71 1.67 4.92 4.92 0 01-3.35 1.64c-.07 0-.15.18-.15.34v3.54c0 4.57 2.28 6.82 6 8.95.362.25.79.39 1.23.4a1.51 1.51 0 001.07-.28l.14-.11zM11 13l3-3a.75.75 0 011 1l-3.46 3.53a.74.74 0 01-.53.22.78.78 0 01-.51-.2l-2.08-1.91a.75.75 0 011-1.11L11 13z"></path>
                        </svg>
                        <p className="text-white font-bold">Checkout Sekarang!</p>
                    </div>
                    
                    </section>
                    </div>
                </div>
                {/* <!-- section right end --> */}
            
        </div>
        <section>
                <Footer/>
        </section>
        </>
    )
};

export default DetailProductPage;