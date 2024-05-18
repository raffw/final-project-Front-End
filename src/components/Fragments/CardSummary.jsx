const CardSummary = () => {
  return (
    <>
      <div className="md:mx-4 md:w-2/5">
        <div className="border rounded-lg shadow-md">
          <section>
            <div className=" border-b-4">
              <div className="flex flex-wrap border rounded-md text-center px-2 py-1 mb-4 mx-7 my-4 justify-between ">
                <div className="mb-2 ml-1 mt-2 font-bold text-sm font-serif">
                  Ambil Promomu!
                </div>
                <div className="mr-2 mt-1"><svg className="unf-icon" viewBox="0 0 24 24" width="22" height="22"
                    fill="var(--color-icon-enabled, #2E3137)" style={{display: "inline-block", align: "middle"}}>
                    <path
                      d="M12 15.25a.74.74 0 01-.53-.22l-5-5A.75.75 0 017.53 9L12 13.44 16.47 9a.75.75 0 011.06 1l-5 5a.74.74 0 01-.53.25z">
                    </path>
                  </svg>
                </div>
              </div>
           </div>
  
           <div className="border-b mx-2">
              <p className="font-bold pt-3 px-4">Ringkasan Belanja</p>
              <div className="flex justify-between mx-6 mb-3 text-gray-500">
                <div className="">
                  <p>Total Belanja</p>
                  <p>Total Harga</p>
                  <p>Total Ongkos Kirim</p>
                </div>
                <div>
                  <p>Rp20000</p>
                  <p>Rp20000</p>
                  <p>Rp20000</p>
                </div>
              </div>
           </div>
  
           <div className="border-b mx-2 ">
              <p className="font-bold pt-3 px-4">Biaya Transaksi</p>
              <div className="flex justify-between mx-6 mb-3 text-gray-500">
                <div className="">
                  <p>Biaya Layanan</p>
                  <p>Biaya Jasa Aplikasi</p>
                </div>
                <div>
                  <p>Rp20000</p>
                  <p>Rp20000</p>
                </div>
              </div>
             </div>
             <div className="flex border-b mx-2 justify-between">
              <p className="font-bold mt-3 mx-4 mb-4">Total Tagihan</p>
              <p className="mt-3 mr-6 text-gray-500">Rp60000</p>
           </div>
  
           <div className="flex border rounded-lg bg-midGreen py-3 mx-4 my-4 justify-center">
               <svg className="unf-icon mr-2px" viewBox="0 0 24 24" width="24" height="24" fill="#FFFFFF" 
               style={{display: "inline-block", align: "middle"}}><path fillRule="evenodd" clipRule="evenodd" d="M17.641 5.18a3.46 3.46 0 001.439.37 1.68 1.68 0 011.61 1.84v3.5c0 5.42-3.37 8.21-6.69 10.21a3 3 0 01-2.01.64 3.7 3.7 0 01-2-.6c-4.05-2.33-6.76-4.97-6.76-10.25v-3.5a1.75 1.75 0 011.65-1.84 3.57 3.57 0 002.41-1.26 6.46 6.46 0 014.69-2.05 5.9 5.9 0 014.51 2 3.46 3.46 0 001.151.94zM13.23 19.89c4.25-2.61 6-5.21 6-9l.02-3.5c0-.08-.01-.34-.15-.34a4.89 4.89 0 01-3.62-1.72A4.42 4.42 0 0012 3.74a5 5 0 00-3.71 1.67 4.92 4.92 0 01-3.35 1.64c-.07 0-.15.18-.15.34v3.54c0 4.57 2.28 6.82 6 8.95.362.25.79.39 1.23.4a1.51 1.51 0 001.07-.28l.14-.11zM11 13l3-3a.75.75 0 011 1l-3.46 3.53a.74.74 0 01-.53.22.78.78 0 01-.51-.2l-2.08-1.91a.75.75 0 011-1.11L11 13z"></path>
              </svg>
              <p className="text-white font-bold">Bayar</p>
           </div>
          
          </section>
        </div>
     </div>
    </>
  )
}

export default CardSummary;

