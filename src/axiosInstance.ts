import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api', // آدرس پایه (در محیط توسعه از proxy استفاده می‌شود)
  timeout: 10000, // زمان انتظار (10 ثانیه)
  headers:{
    'Content-Type':'application/json',
  }
});

export default axiosInstance;