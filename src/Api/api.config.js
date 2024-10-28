import axios from 'axios';
import {getTokenFromSecureStore} from "../services/Helpers";
export const BASE_URL = 'http://192.168.100.20:8080/erp/api';


/*======== INSTANCE ==========*/
export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});
export const axiosInstanceImages = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "multipart/form-data",
    },
});



axiosInstance.interceptors.request.use(
    async (config) => {
        const token = await getTokenFromSecureStore();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);
axiosInstanceImages.interceptors.request.use(
    async (config) => {
        const token = await getTokenFromSecureStore();
        // const hotelId = store.getState().currentHotel.id;
        // if (token) {
        //     config.headers.Authorization = `Bearer ${token}`;
        // }
        // if (hotelId) {
        //     switch (config.method) {
        //         case 'patch':
        //             config.url += `/${hotelId}/update`;
        //             break;
        //         case 'delete':
        //             config.url += `/${hotelId}/delete`;
        //             break;
        //         default:
        //             // Handle other HTTP methods or URL paths if needed
        //             break;
        //     }
        // }
        return config;
    },
    (error) => Promise.reject(error)
);