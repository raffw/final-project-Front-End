export const searchDataCall = async (query) => {
    const res = await axios.get(`${BASE_URL}/products/search?q=${query}`)
    return res
}