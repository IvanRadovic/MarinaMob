
import React, {useState, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/*========== FUNCTIONS ==========*/
import {
    getTokenFromSecureStore,
    removeCompanyFromSecureStore,
    removeTokenFromSecureStore,
    removeYearFromSecureStore
} from "../services/Helpers";

/*========== SCREENS ==========*/
import ProfileScreen from "../Screens/ProfileScreen";
import HomeScreen from "../Screens/HomeScreen";
import {Alert} from "react-native";

const Stack = createStackNavigator();

function AppNavigation({backToLogin}) {

    const logOut = () => {
        Alert.alert(
            "Odjava",
            "Da li ste sigurni da želite da se odjavite?", // Alert message
            [
                {
                    text: "Otkaži",
                    style: "default",
                },
                {
                    text: "Odjavi se",
                    onPress: () => {
                        removeTokenFromSecureStore();
                        removeCompanyFromSecureStore();
                        removeYearFromSecureStore();
                        backToLogin();
                    },
                },
            ]
        );
    };




    const stackScreens = [
        {
            name: 'HomeScreen',
            component: (props) => <HomeScreen {...props} logOut={logOut} />,
            options: { headerShown: false},
        },
        {
            name: 'ProfileScreen',
            component: ProfileScreen,
            options: { headerShown: false},
        },
    ];


    return (
        <Stack.Navigator>
            {stackScreens.map((screen, index) => (
                <Stack.Screen
                    key={index}
                    name={screen.name}
                    component={screen.component}
                    options={screen.options}
                />
            ))}
        </Stack.Navigator>
    );
}

export default AppNavigation;
        