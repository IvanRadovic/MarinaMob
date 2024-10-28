import * as SecureStore from 'expo-secure-store';


/*============= TOKEN ============*/
// Async function to save the token to SecureStore
export const saveTokenToSecureStore = async (token) => {
    try {
        await SecureStore.setItemAsync('authToken', token);
    } catch (error) {
        console.error('Error saving token to SecureStore:', error);
    }
}
// Async function to get the token from SecureStore
export const getTokenFromSecureStore = async () => {
    try {
        const token = await SecureStore.getItemAsync('authToken');
        return token;
    } catch (error) {
        console.error('Error getting token from SecureStore:', error);
        return null;
    }
}
export const removeTokenFromSecureStore = async () => {
    try {
        await SecureStore.deleteItemAsync('authToken');
    } catch (error) {
        console.error('Error removing token from SecureStore:', error);
    }
}


/*============ COMPANY LIST ===========*/
export const saveCompantyToSecureStore = async (company) => {
    try {
        await SecureStore.setItemAsync('company', company);
    } catch (error) {
        console.error('Error saving company to SecureStore:', error);
    }
}
export const getCompanyFromSecureStore = async () => {
    try {
        const company = await SecureStore.getItemAsync('company');
        return company;
    } catch (error) {
        console.error('Error getting company from SecureStore:', error);
        return null;
    }
}
export const removeCompanyFromSecureStore = async () => {
    try {
        await SecureStore.deleteItemAsync('company');
    } catch (error) {
        console.error('Error removing company from SecureStore:', error);
    }
}


/*============== YEAR LIST ============*/
export const saveYearToSecureStore = async (year) => {
    try {
        await SecureStore.setItemAsync('year', year);
    } catch (error) {
        console.error('Error saving year to SecureStore:', error);
    }
}
export const getYearFromSecureStore = async () => {
    try {
        const year = await SecureStore.getItemAsync('year');
        return year;
    } catch (error) {
        console.error('Error getting year from SecureStore:', error);
        return null;
    }
}
export const removeYearFromSecureStore = async () => {
    try {
        await SecureStore.deleteItemAsync('year');
    } catch (error) {
        console.error('Error removing company from SecureStore:', error);
    }
}





// Async function to save the institutions to SecureStore
export const buildQueryString = (params) => {
    let queryString = '';
    let isFirstParam = true;
    for (let key in params) {
        if (params[key]) {
            if (!isFirstParam) {
                queryString += '&';
            }
            queryString += `${key}=${params[key]}`;
            isFirstParam = false;
        }
    }
    return queryString ? '?' + queryString : '';
}