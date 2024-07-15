import axios from "axios";
import { TMDB_BASE_URL } from "./Constants/constants";

const axiosInstance = axios.create({
    TMDB_BASE_URL: TMDB_BASE_URL,
});

export default axiosInstance;