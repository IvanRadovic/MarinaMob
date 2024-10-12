import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
   const navigation = useNavigation();

    return (
        <View className={'flex-1 justify-center items-center'}>
            <Text className={'text-2xl mb-2'}>HomeScreen Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                <Text>Go to Profile Screen</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;