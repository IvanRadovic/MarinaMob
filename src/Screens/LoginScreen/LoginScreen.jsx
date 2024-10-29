import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Button, ActivityIndicator, ImageBackground, Image} from 'react-native';

import {Controller, useForm} from 'react-hook-form';

/*========== STYLE ===========*/
import {styles} from "./LoginScreen.style";
import {pbLarge, phMediumSmall, phSmall, pLarge, pvMedium, pvMediumBig, pvSmall} from "../../Style/Components/Paddings";
import {mbMediumBig} from "../../Style/Components/Margins";
import {flex1, flex2, justifyCenter} from "../../Style/Components/FlexAligments";


/*========== HOOKS ===========*/
import {useToast} from "../../Hooks/toastMessage";

/*========== FUNCTIONS ===========*/
import {createLogin, getAccount, getAdm} from "../../Api/api.functions";
import {saveCompanyToSecureStore, saveTokenToSecureStore, saveYearToSecureStore} from "../../services/Helpers";
import {SharedShadowStyle} from "../../Style/Components/Layouts";
import {FontSizeBiggest, fsMedium, fsMediumBig, fsMediumBiggest} from "../../Style/Components/FontAdjust";
import {gray} from "nativewind/src/metro/picocolors";

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
            await saveTokenToSecureStore(response.id_token);
            await getAccount();
            const companyAndYear = await getAdm();
            if (companyAndYear && companyAndYear.length > 0) {
                const lastItem = companyAndYear[companyAndYear.length - 1];
                console.log('lastItem', lastItem)
                await saveCompanyToSecureStore(lastItem.preduzece.id.toString());
                await saveYearToSecureStore(lastItem.godina.toString());
            }
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
        <View style={{...flex1, backgroundColor:'rgba(199,210,224,0.73)'}}>
            <View style={{ ...pLarge, ...flex2, ...justifyCenter }}>
                <View style={{...SharedShadowStyle, ...pbLarge}}>
                    <Image
                        source={require('../../../assets/Images/logo1.png')}
                        style={{width: 300, height: 200, alignSelf: 'center'}}
                        resizeMode={'contain'}
                    />
                    <View>
                        <Text style={{...pvSmall, ...fsMedium}}>Username:</Text>
                        <Controller
                            control={control}
                            name="username"
                            rules={{ required: "Ovo polje je obavezno" }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    placeholder="Unesite username"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    style={styles.input}
                                    placeholderTextColor={'#696f93'}
                                />
                            )}
                        />
                        {errors.email && <Text style={{ color: 'red' }}>{errors.email.message}</Text>}
                    </View>

                    <View style={{...mbMediumBig}}>
                        <Text style={{...pvSmall, ...fsMedium}}>Password:</Text>
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
                                    style={styles.input}
                                    placeholderTextColor={'#696f93'}
                                />
                            )}
                        />
                        {errors.password && <Text style={{ color: 'red' }}>{errors.password.message}</Text>}
                    </View>
                    <Button
                        title={'Prijavi se'}
                        onPress={handleSubmit(onSubmit)}
                        color={'#27368C'}
                        borderRadius={50}
                    />
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;
