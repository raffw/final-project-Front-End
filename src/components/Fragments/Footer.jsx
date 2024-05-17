export default function Footer() {
  return (
    <>
      <hr className="w-full"></hr>
      <footer className="flex flex-col py-10">
        <div className="flex h-1/5 bg-transparent justify-between">
          <div className="py-5 px-20 pr-0 ">
            <h1 className="font-bold">BISNIS</h1>
            <div className="py-5 w-40">
              <p>Kebijakan Privasi</p>
              <p>Syarat dan Ketentuan</p>
            </div>
          </div>
          <div className="py-5 px-20 pr-0 ">
            <h1 className="font-bold">PELANGGAN</h1>
            <div className="py-5 w-40">
              <p>Kebijakan Privasi</p>
              <p>Syarat dan Ketentuan</p>
            </div>
          </div>
          <div className="flex flex-col py-10 px-10 w-1/2 bg-transparent items-center">
            <h1 className="font-bold">Cari tahu informasi terbaru</h1>
            <div className="py-5 flex gap-3 items-center">
              <a href="">
                <img src="../icon/icon-footer/vector.svg" alt="" />
              </a>
              <a href="">
                <img src="../icon/icon-footer/gmail.svg" alt="" />
              </a>
              <a href="">
                <img src="../icon/icon-footer/linkedin.svg" alt="" />
              </a>
              <a href="">
                <img src="../icon/icon-footer/Whatsapp.svg" alt="" />
              </a>
              <a href="">
                <img src="../icon/icon-footer/Youtube.svg" alt="" />
              </a>
              <a href="">
                <img src="../icon/icon-footer/twitter.svg" alt="" />
              </a>
            </div>
            <div>
              <h1 className="py-2 font-bold">Unduh Aplikasi</h1>
              <div className="flex gap-5">
                <a href="">
                  <img
                    src="../icon/icon-footer/playstore.svg"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    src="../icon/icon-footer/AppStore.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center px-20">
          <a href="">
            <img src="../icon/icon-footer/certified.svg" alt="" />
          </a>
          <p className="w-1/3 text-end">
            Surplus Indonesia - PT Ekonomi Sirkular Indonesia Jl Gudang Peluru
            Timur Blok H no. 201, Kebon Baru, Tebet, Kota Jakarta Selatan, DKI
            Jakarta, Indonesia
          </p>
        </div>
      </footer>
    </>
  );
}
