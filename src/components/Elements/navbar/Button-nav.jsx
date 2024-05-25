const ButtLog = () => {
    return (
        <div className="flex gap-4 px-4 items-center">
            <a href="/login" className="border-2 border-hijau w-28 bg-white rounded-xl p-3 flex justify-center font-poppins font-bold text-hijau items center">Masuk</a>
            <a href="/register" className="border-transparent bg-hijau rounded-xl p-3 w-28 flex justify-center font-poppins font-bold text-white items-center">Daftar</a>
        </div>
    )
}

export default ButtLog ;