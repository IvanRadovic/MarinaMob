import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';

/*============= COMPONENTS ==============*/
import AppNavigation from './AppNavigation';
import LoginNavigation from "./LoginNavigation.jsx";

/*============= FUNCTIONS =============*/
import {getTokenFromSecureStore} from "../services/Helpers";

export default function MainNavigation() {
    const [token, setToken] = useState("start");

    const getToken = async () => {
        const retrievedToken = await getTokenFromSecureStore();
        setToken(retrievedToken);
    };

    useEffect(() => {
        getToken();
    }, [token]);


    return (
        <NavigationContainer>
            {token !== "start" && token !== null ? (
                <AppNavigation backToLogin={() => getToken()} />
            ) : (
                token === null && <LoginNavigation startApp={() => getToken()} />
            )}
        </NavigationContainer>
    );
}
        