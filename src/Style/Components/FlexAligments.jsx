import BackgroundColor from "../BaseStyle";
import Alignments from "../UtilitiesStyle"
import Font from "../TypographyStyle"

/* --- Flex --- */
//sizes
export const flex0 = { flex: 0 }
export const flex1 = { flex: 1 }
export const flex2 = { flex: 2 }
export const flex3 = { flex: 3 }
export const flex4 = { flex: 4 }
export const flex5 = { flex: 5 }
export const flex6 = { flex: 6 }
export const flex7 = { flex: 7 }
export const flex8 = { flex: 8 }

//justify-content
export const FlexDirectionRow = { flexDirection: 'row' }
export const FlexDirectionCol = { flexDirection: 'col' }
export const justifyStart = { justifyContent: 'flex-start' }
export const justifyEnd = { justifyContent: 'flex-end' }
export const justifyCenter = { justifyContent: 'center' }
export const spaceBetween = { justifyContent: 'space-between' }
export const spaceAround = { justifyContent: 'space-around' }
export const spaceEvenly = { justifyContent: 'space-evenly' }

//align-items
export const alignItemsCenter = { alignItems: 'center' }
export const alignItemsStart = { alignItems: 'flex-start' }
export const alignItemsEnd = { alignItems: 'flex-end' }

//gap
export const gapTiny = { gap: Alignments.Spacing.tiny }
export const gapXs = { gap: Alignments.Spacing.xs }
export const gapSmall = { gap: Alignments.Spacing.small }
export const gapMediumSmall = { gap: Alignments.Spacing.mediumSmall }
export const gapNormal = { gap: Alignments.Spacing.normal }
export const gapLarge = { gap: Alignments.Spacing.large }
export const gapHuge = { gap: Alignments.Spacing.huge }



/* ----  The most common use of flex blocks ---- */
export const FlexDefaultCenter = {
    ...justifyCenter,
    ...alignItemsCenter,
};

export const FlexRow = {
    ...FlexDirectionRow,
    ...alignItemsCenter,
}
export const FlexCol = {
    ...FlexDirectionCol,
    ...alignItemsCenter,
}

export const FlexRowSpaceBeetween = {
    ...FlexDirectionRow,
    ...spaceBetween,
}





