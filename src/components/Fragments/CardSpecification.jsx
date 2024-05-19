const CardSpecification = ()=> {
    return (
        <>
            <div id="pdp_comp-product_detail" className="border rounded-lg shadow-md lg:w-full">
                 <div className="border-b-2 border-midGreen py-4">
                    <p className="font-bold mx-44">Spesifikasi Item</p>
                </div>
                    <div className="px-2 py-2" role="tabpanel">
                        <table>
                            <tr>
                                <th>Merk</th>
                                <th>:</th>
                                <td className="css-kmh5l0">Sebutkan merk sendiri atau merk dari produk manufaktur tertentu</td>
                            </tr>

                            <tr>
                                <th>Jenis Makanan/Jenis minuman</th>
                                <th>:</th>
                                <td className="css-kmh5l0">Roti/tumis/Kuah/hidangan pembuka/Hidangan penutup/Jamuan Herbal</td>
                            </tr>
                            <tr>
                                <th>Kandungan</th>
                                <th>:</th>
                                <td className="css-kmh5l0">Sayur a, b, c | susu | krim | mentega | Kacang | terigu | telur (bahan dominan)</td>
                            </tr>
                            <tr>
                                <th>Karakteristik</th>
                                <th>:</th>
                                <td className="css-kmh5l0">Manis/masam/pahit/pedas (rasa dominan)</td>
                            </tr>
                            <tr>
                                <th>Tekstur</th>
                                <th>:</th>
                                <td className="css-kmh5l0">Berkuah, Beku, Cair, padat, lembut</td>
                            </tr>
                            <tr>
                                <th>Durasi Konsumsi</th>
                                <th>:</th>
                                <td className="css-kmh5l0">Sehari, 1x24, dua hari, semingu, sebulan | (atau sebutkan expiry date)</td>
                            </tr>
                        </table>
                    </div>
            </div>
        </>
    )
};

export default CardSpecification;