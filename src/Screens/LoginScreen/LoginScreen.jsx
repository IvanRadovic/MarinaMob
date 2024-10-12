
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {

   const navigation = useNavigation();

    return (
        <View className={'flex-1 justify-center items-center'}>
            <Text className={'text-2xl mb-3'}>LoginScreen Screen</Text>
            <TouchableOpacity>
                <Text>Go to Home Screen</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
        