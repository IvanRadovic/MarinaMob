import { useState, useCallback } from 'react';
import { View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';

import { bgWhite } from '../Style/Components/BackgroundColors';
import {alignItemsCenter, FlexRowSpaceBeetween,} from '../Style/Components/FlexAligments';
import { BorderRadiusMediumSmall } from '../Style/Components/BorderAdjust';
import {pMediumBig} from '../Style/Components/Paddings';
import { fsMediumBig, fsSmall, bold} from '../Style/Components/FontAdjust';
import AntDesign from "@expo/vector-icons/AntDesign";

export const toastConfig = {
    success: ({ text1, text2, ...rest }) => (
        <View style={{width:"100%", ...FlexRowSpaceBeetween,...alignItemsCenter, ...BorderRadiusMediumSmall, ...pMediumBig, ...bgWhite }}>
            <View style={{ display: 'flex' }}>
                <Text style={{ ...fsMediumBig, ...bold, color:"#1E6466" }}>{text1}</Text>
                <Text style={{ ...fsSmall }}>{text2}</Text>
            </View>
            <AntDesign name="checkcircle" size={24} color="#1E6466" />
        </View>
    ),
    error: ({ text1, text2, ...rest }) => (
        <View style={{ width:"100%",...FlexRowSpaceBeetween,...alignItemsCenter, ...BorderRadiusMediumSmall, ...pMediumBig, ...bgWhite }}>
            <View style={{ display: 'flex' }}>
                <Text style={{ ...fsMediumBig, ...bold, color:"#F77B7A"}}>{text1}</Text>
                <Text style={{ ...fsSmall }}>{text2}</Text>
            </View>
            <AntDesign name="closecircle" size={24} color="#F77B7A" />
        </View>
    ),
};

export const useToast = () => {
    const [toastConfig, setToastConfig] = useState(null);

    const showToast = useCallback(({ type, message }) => {
        Toast.show({
            type: type === 'success' ? 'success' : 'error',
            position: 'top',
            text1: type === 'success' ? 'Success' : 'Error',
            text2: message,
            text1Style: {
                fontSize: 13,
            },
            text2Style: {
                fontSize: 13,
            }
        });
    }, []);

    return { showToast, toastConfig };
};
