import React from 'react';
import {View, Text, Dimensions, TextInput, Button, ActivityIndicator, ImageBackground, Image} from 'react-native';

import {Controller, useForm} from 'react-hook-form';

/*========== STYLE ===========*/
import {styles} from "./LoginScreen.style";
import {
    pbLarge,
    phMediumSmall,
    phSmall,
    pLarge,
    pvMedium,
    pvMediumBig,
    pvSmall,
    pvTiny
} from "../../Style/Components/Paddings";
import {mbMediumBig} from "../../Style/Components/Margins";
import {
    alignItemsEnd,
    flex1,
    flex2,
    justifyCenter,
    justifyEnd,
    justifyStart, spaceAround
} from "../../Style/Components/FlexAligments";


/*========== HOOKS ===========*/
import {useToast} from "../../Hooks/toastMessage";

/*========== FUNCTIONS ===========*/
import {createLogin, getAccount, getAdm} from "../../Api/api.functions";
import {saveCompanyToSecureStore, saveTokenToSecureStore, saveYearToSecureStore} from "../../services/Helpers";
import {SharedShadowStyle} from "../../Style/Components/Layouts";
import {FontSizeBiggest, fsMedium, fsMediumBig, fsMediumBiggest} from "../../Style/Components/FontAdjust";
import {gray} from "nativewind/src/metro/picocolors";
import {BorderRadiusGigant} from "../../Style/Components/BorderAdjust";

const LoginScreen = ({ startApp }) => {

    const { register,control, handleSubmit, setValue, formState: { errors } } = useForm();
    const { showToast } = useToast();


    const { width, height } = Dimensions.get('window');
    const imageWidth = width * 0.75; // 75% of the window width
    const imageHeight = height * 0.25; // 25% of the window height

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
        <ImageBackground
            source={require('../../../assets/Images/img3.jpg')}
            style={{...flex1, ...phMediumSmall}}
            resizeMode={'cover'}
        >
            <View style={{...flex1, ...alignItemsEnd, ...justifyEnd}}>
                <Image
                    source={require('../../../assets/Images/logo1.png')}
                    style={{width: imageWidth, height: imageHeight, alignSelf: 'center'}}
                    resizeMode={'contain'}
                />
            </View>
            <View style={{ ...pLarge, ...flex2, ...justifyStart }}>
                <View style={{...SharedShadowStyle, ...pbLarge}}>
                    <View>
                        <Text style={{...pvTiny, ...fsMedium}}>Username:</Text>
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
                        <Text style={{...pvTiny, ...fsMedium}}>Password:</Text>
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
                    />
                </View>
            </View>
        </ImageBackground>
    );
};

export default LoginScreen;
