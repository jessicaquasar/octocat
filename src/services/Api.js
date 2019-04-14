import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://api.github.com/users',
    responseType: 'json',
    timeout: 30000
})

export default axiosInstance