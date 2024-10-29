import {axiosInstance} from "./api.config.js";

export const createLogin = async (data) => {
    try {
        const response = await axiosInstance.post(`/authenticate`, data);
        console.log("Login", response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getAccount = async () => {
    try {
        const response = await axiosInstance.get(`/account`);
        console.log("account", response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getAdm = async () => {
    try {
        const response = await axiosInstance.get(`/adm/adm-user-preduzeca-by-login`);
        console.log("adm/adm-user-preduzeca-by-login", response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
}
