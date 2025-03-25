import axios from "axios";

const api = axios.create({
    baseURL: 'http://ws1.csie.ntu.edu.tw:52680/api/v1',
});

export default api;