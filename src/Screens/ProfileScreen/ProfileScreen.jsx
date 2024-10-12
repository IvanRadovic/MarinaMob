import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
   const navigation = useNavigation();

    return (
        <View className={'flex-1 justify-center items-center'}>
            <Text className={'text-2xl mb-3'}>ProfileScreen Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                <Text>Go to Home Screen</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProfileScreen;