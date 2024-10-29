import React, {useEffect} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {getCompanyFromSecureStore, getYearFromSecureStore} from "../../services/Helpers";

const HomeScreen = ({logOut}) => {

   const navigation = useNavigation();

   const getCompanyAndYear = async () => {
       const companyId = await getCompanyFromSecureStore();
       const year = await getYearFromSecureStore();
       console.log('companyId:', companyId);
       console.log('year:', year);
   }

   useEffect(() => {
         getCompanyAndYear();
   },[])

    return (
        <View className={'flex-1 justify-center items-center'}>
            <Text className={'text-2xl mb-2'}>HomeScreen Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                <Text>Go to Profile Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={logOut}>
                <Text>LOGOUT DUGME</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;