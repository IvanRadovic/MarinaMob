
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../Screens/LoginScreen";

const Stack = createStackNavigator();

function LoginNavigation ({ startApp }) {

    const loginScreens = [
        {
            name: 'Login',
            component: (props) => <LoginScreen {...props} startApp={startApp} />,
            options: {
                headerShown: false,
            },
        },
    ];

    return (
        <Stack.Navigator>
            {loginScreens.map((screen, index) => (
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

export default LoginNavigation;
        