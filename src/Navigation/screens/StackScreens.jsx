import HomeScreen from "../../Screens/HomeScreen";
import ProfileScreen from "../../Screens/ProfileScreen";

export const stackScreens = [
    {
        name:'HomeScreen',
        component:HomeScreen,
        options: { headerShown: false }
    },
    {
        name:'ProfileScreen',
        component:ProfileScreen,
        options: { headerShown: false }
    }
];
