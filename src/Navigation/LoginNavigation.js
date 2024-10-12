
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { loginScreens } from './screens/LoginScreens';

const Stack = createStackNavigator();

function LoginNavigation() {
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
        