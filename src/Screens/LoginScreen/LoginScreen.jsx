import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Button, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { createLogin } from "../../Api/api.functions";

const LoginScreen = ({ startApp }) => {
    const navigation = useNavigation();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    // Definisanje mutacije za logovanje
    const loginMutation = useMutation(
        async (userData) => {
            const response = await createLogin(userData);
            startApp();
            return response.data;
        }
    );

    const onSubmit = (data) => {
        loginMutation.mutate(data, {
            onSuccess: (data) => {
                console.log('Uspešno logovanje', data);
            },
            onError: (error) => {
                // Obrada greške
                console.error('Greška prilikom logovanja:', error);
            },
        });
    };

    return (
        <View className={'flex-1 justify-center items-center mt-10'}>
            <Text className={'text-2xl mt-2'}>LoginScreen Screen</Text>
            <View style={{ padding: 20 }}>
                <Text>Email:</Text>
                <TextInput
                    placeholder="Unesite email"
                    onChangeText={(text) => setValue('email', text)}
                    style={{
                        borderWidth: 1,
                        borderColor: 'gray',
                        padding: 10,
                        marginBottom: 10,
                    }}
                />
                {errors.email && <Text style={{ color: 'red' }}>{errors.email.message}</Text>}

                <Text>Password:</Text>
                <TextInput
                    placeholder="Unesite šifru"
                    onChangeText={(text) => setValue('password', text)}
                    secureTextEntry
                    style={{
                        borderWidth: 1,
                        borderColor: 'gray',
                        padding: 10,
                        marginBottom: 10,
                    }}
                />
                {errors.password && <Text style={{ color: 'red' }}>{errors.password.message}</Text>}

                <Button
                    title={'Uloguj se'}
                    onPress={handleSubmit(onSubmit)}
                    disabled={loginMutation.isLoading}
                />

                {loginMutation.isError && (
                    <Text style={{ color: 'red' }}>Došlo je do greške prilikom logovanja. Pokušajte ponovo.</Text>
                )}

                {loginMutation.isLoading && <ActivityIndicator size="small" color="#0000ff" />}
            </View>
        </View>
    );
};

export default LoginScreen;
