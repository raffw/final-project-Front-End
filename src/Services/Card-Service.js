import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
export const fetchCardCall = async() => {
    const res = await axios.get(`${BASE_URL}/food`)
    return res
} 