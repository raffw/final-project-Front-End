const CardShipment = () => {
    return (
        <>
        <section id="payment-card" className="">
        <div className="font-bold font-open px-2 mt-2">
          <p>Pengiriman & Pembayaran</p>
        </div>
        <div className="rounded-md shadow-md mt-2">
          <div className="border-b flex py-4 px-2">
            <div className="bg-white w-5/6">
              <div className="flex text-sm gap-1 px-4">
                <p className="px-2 pb-1 bg-midGreen rounded-md text-white font-bold ">Utama</p>
                <p className="font-bold">Rumah</p>
                <p>-</p>
                <p>Nama</p>
                <p>(6281919168888)</p>
              </div>
              <p className="px-5 text-sm font-opens text-gray-400">Alamat, Kecamatan, Kabupaten/Kota</p>
            </div>
            <div className="w-24">
              <button type="button"><svg className="unf-icon items-center mt-2 ml-12" viewBox="0 0 24 24" width="20"
                  height="20" fill="var(--color-icon-enabled, #2E3137)"
                  style={{display: "inline-block", align: "middle"}}>
                  <path
                    d="M9.5 17.75a.75.75 0 01-.5-1.28L13.44 12 9 7.53a.75.75 0 011-1.06l5 5a.75.75 0 010 1.06l-5 5a.74.74 0 01-.5.22z">
                  </path>
                </svg></button>
            </div>
          </div>
          <div className="xl:flex border-b">
            <div className="mt-4">
              <p className="mx-6 font-bold text-sm">Pilihan Pengiriman</p>
              <div className="flex flex-wrap border rounded-md text-center px-2 py-1 mb-4 mt-1 mx-6 justify-between sm:w-80">
                <div className="ml-1">Reguler</div>
                <div className="mr-2"><svg className="unf-icon" viewBox="0 0 24 24" width="22" height="22"
                    fill="var(--color-icon-enabled, #2E3137)" style={{display: "inline-block", align: "middle"}}>
                    <path
                      d="M12 15.25a.74.74 0 01-.53-.22l-5-5A.75.75 0 017.53 9L12 13.44 16.47 9a.75.75 0 011.06 1l-5 5a.74.74 0 01-.53.25z">
                    </path>
                  </svg></div>
              </div>
            </div>
            <div>
              <div className="mt-4">
                <p className="mx-8 font-bold text-sm">Pilihan Kurir</p>
                <div
                  className="flex flex-wrap border rounded-md text-center px-2 py-1  mb-4 mt-1 mr-6 justify-between sm:w-80">
                  <div className="ml-1">Reguler</div>
                  <div className="mr-2"><svg className="unf-icon" viewBox="0 0 24 24" width="22" height="22"
                      fill="var(--color-icon-enabled, #2E3137)" >
                      <path
                        d="M12 15.25a.74.74 0 01-.53-.22l-5-5A.75.75 0 017.53 9L12 13.44 16.47 9a.75.75 0 011.06 1l-5 5a.74.74 0 01-.53.25z">
                      </path>
                    </svg></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex py-2 px-2">
            <div className="bg-white-50 w-5/6">
              <div className="flex text-sm gap-1 px-4 mt-2">
                <p className="px-1 mt-1"><img className="w-12" src="/public/image/bca-logo-sm.png" alt="logo"/></p>
                <p className="font-bold">BCA Virtual Account</p>

              </div>
            </div>
            <div className="w-24 pb-3">
              <button type="button"><svg className="items-center mt-2 ml-12" viewBox="0 0 24 24" width="20"
                  height="20" fill="var(--color-icon-enabled, #2E3137)"
                  style={{display: "inline-block", align: "middle"}}>
                  <path
                    d="M9.5 17.75a.75.75 0 01-.5-1.28L13.44 12 9 7.53a.75.75 0 011-1.06l5 5a.75.75 0 010 1.06l-5 5a.74.74 0 01-.5.22z">
                  </path>
                </svg></button>
             </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default CardShipment;