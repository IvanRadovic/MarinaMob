
import { NavigationContainer } from '@react-navigation/native';

import AppNavigation from './AppNavigation';
import LoginNavigation from "./LoginNavigation";

export default function MainNavigation() {
    return (
        <NavigationContainer>
            <AppNavigation />
        </NavigationContainer>
    );
}
        