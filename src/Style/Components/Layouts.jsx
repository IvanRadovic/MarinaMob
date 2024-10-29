import {Platform} from "react-native";

import {black, fsMedium, grey,} from "./FontAdjust"
import {alignItemsCenter, flex1, FlexRow, gapNormal, justifyCenter} from "./FlexAligments";
import {mvMediumBig, mvMediumSmall} from "./Margins";
import {pMediumSmall} from "./Paddings";
import {BorderColorInput, BorderRadiusSmall, bwMedium} from "./BorderAdjust";
import {w100} from "./Width&Height";
import BackgroundColor from "../BaseStyle";
import Alignments from "../UtilitiesStyle";
import Font from "../TypographyStyle";



/* ---- Icon style --- */
export const IconStyle = {
    size: {
        small: 12,
        normal: 16,
        big: 20,
        bigger: 24,
        biggest: 26,
        more: 35,
        huge: 76,
    },
    colors: {
        blue: BackgroundColor.buttonReservation,
        white: BackgroundColor.white,
        avatar: BackgroundColor.avatar,
        black: BackgroundColor.black,
        grey: BackgroundColor.grey,
        yellow: BackgroundColor.iconYellow
    }
}

/* --- Shadow style --- */
export const SharedShadowStyle = {
    padding: Alignments.Spacing.medium,
    backgroundColor: BackgroundColor.white,
    borderWidth: Alignments.BorderWidth.none,
    borderRadius: 10,
    shadowColor: BackgroundColor.grey,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: {
        width: 3,
        height: 2,
    },
    elevation: Alignments.Spacing.small,
};

/* --- Steps content */
export const StepContent = {
    container: {
        ...flex1
    },
    textContainer: {
        width: '100%',
        marginVertical: Alignments.Spacing.normal,
        gap: Alignments.Spacing.tiny,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    textHeader: {
        fontSize: Font.size.Big,
        fontWeight: "500"
    },
    textDesc: {
        fontSize: Font.size.Small,
        textAlign: 'center',
        color: BackgroundColor.grey2
    },
}


/*======= BUTTON CONTAINER STYLE FOR BOTTOM BUTTON =======*/
export const ButtonContainer = {
    ...FlexRow,
    ...justifyCenter,
    ...gapNormal,
    ...mvMediumBig,
    marginBottom: Platform.OS === 'ios' ? 40 : 18
}

/*======= INPUT STYLE =======*/
export const InputStyle = {
        height: 50,
        ...pMediumSmall,
        ...mvMediumSmall,
        ...bwMedium,
        ...BorderColorInput,
        ...BorderRadiusSmall,
        ...black,
        ...fsMedium,
}


/*======= DROPDOWN =======*/
export const DropdownStyle = {
    ...w100,
    height: 50,
    ...pMediumSmall,
    ...mvMediumSmall,
    ...bwMedium,
    ...BorderColorInput,
    ...BorderRadiusSmall,
    ...black,
    ...fsMedium,
    ...alignItemsCenter,
}
export const DropDownPlaceholderStyle = {
    ...fsMedium,
    ...grey,
}
export const DropdownSelectedTextStyle = {
    ...fsMedium,
}


/*======= CHECKBOX PRICELIST - IOS =======*/
export const CheckBoxContainer = {
    borderWidth: 0.3,
    borderColor: 'black',
    transform: [{ scale: 0.8 }]
}

