import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://bourse.chartapi.ir",
    headers:{
        "Content-Type":"application/json",
    },
});
export default axiosInstance;