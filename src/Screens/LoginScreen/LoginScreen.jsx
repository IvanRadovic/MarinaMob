import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Button, ActivityIndicator, ImageBackground} from 'react-native';

import {Controller, useForm} from 'react-hook-form';

/*========== STYLE ===========*/
import {pLarge} from "../../Style/Components/Paddings";
import {mbMediumBig} from "../../Style/Components/Margins";
import {flex1, flex2} from "../../Style/Components/FlexAligments";


/*========== HOOKS ===========*/
import {useToast} from "../../Hooks/toastMessage";

/*========== FUNCTIONS ===========*/
import { createLogin } from "../../Api/api.functions";
import {saveTokenToSecureStore} from "../../services/Helpers";

const LoginScreen = ({ startApp }) => {

    const { register,control, handleSubmit, setValue, formState: { errors } } = useForm();
    const { showToast } = useToast();

    const onSubmit = async (data) => {

        const object={
            username:data.username,
            password:data.password,
            rememberMe:false
        }
        console.log('object:', object)
        try {
            const response = await createLogin(object);
            await saveTokenToSecureStore(response.data.token);
            startApp();
            showToast({ type: "success", message: "Uspješno ste prijavljeni!" })
        } catch (error) {
            console.error('Error creating login:', error);
            console.log(error.response);
            const message = JSON.parse(JSON.stringify(error.response.data)).message;
            showToast({ type: "error", message: message });
        }
    }

    return (
        <View style={{...flex1}}>
            <View style={{...flex2}}>
                <ImageBackground
                    source={require('../../../assets/Images/logo.png')}
                    style={{width: '100%', height: '100%'}}
                    resizeMode={'contain'}
                />
            </View>
            <View style={{ ...pLarge, ...flex2 }}>
                <View>
                    <Text>Username:</Text>
                    <Controller
                        control={control}
                        name="username"
                        rules={{ required: "Ovo polje je obavezno" }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                placeholder="Unesite email"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                style={{
                                    borderWidth: 1,
                                    borderColor: 'gray',
                                    padding: 10,
                                }}
                            />
                        )}
                    />
                    {errors.email && <Text style={{ color: 'red' }}>{errors.email.message}</Text>}
                </View>

               <View style={{...mbMediumBig}}>
                   <Text>Password:</Text>
                   <Controller
                       control={control}
                       name="password"
                       rules={{ required: "Ovo polje je obavezno" }}
                       render={({ field: { onChange, onBlur, value } }) => (
                           <TextInput
                               placeholder="Unesite šifru"
                               onBlur={onBlur}
                               onChangeText={onChange}
                               value={value}
                               secureTextEntry
                               style={{
                                   borderWidth: 1,
                                   borderColor: 'gray',
                                   padding: 10,
                               }}
                           />
                       )}
                   />
                   {errors.password && <Text style={{ color: 'red' }}>{errors.password.message}</Text>}
               </View>
                <Button
                    title={'Prijavi se'}
                    onPress={handleSubmit(onSubmit)}
                />
            </View>
        </View>
    );
};

export default LoginScreen;
