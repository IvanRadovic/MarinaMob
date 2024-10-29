
    import { StyleSheet } from 'react-native';
    import {pMediumSmall} from "../../Style/Components/Paddings";
    import {mvMediumSmall} from "../../Style/Components/Margins";
    import {BorderRadiusSmall} from "../../Style/Components/BorderAdjust";
    import {fsMedium} from "../../Style/Components/FontAdjust";
    import {justifyCenter} from "../../Style/Components/FlexAligments";

    export const styles = StyleSheet.create({
        input:{
            ...pMediumSmall,
            ...mvMediumSmall,
            ...BorderRadiusSmall,
            color:' #696f93',
            ...fsMedium,
            ...justifyCenter,
            ...justifyCenter,
            backgroundColor:'rgba(166,168,175,0.36)'
        },
    });
        