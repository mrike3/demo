import axios from "axios";
const axiosapi =axios.create({
    baseURL:'http://localhost:8082',
    timeout:60000,
    responseType:'json'
})
axiosapi.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default axiosapi