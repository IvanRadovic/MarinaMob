
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { stackScreens } from './screens/StackScreens';

const Stack = createStackNavigator();

function AppNavigation() {
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
        