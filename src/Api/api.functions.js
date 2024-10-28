import {axiosInstance} from "./api.config.js";

export const createLogin = async (data) => {
    try {
        const response = await axiosInstance.post(`/authenticate`, data);
        console.log("Login", response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
