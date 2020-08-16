declare type ReducerAction = {
    payload: string | boolean | IconsColor;
    type: string;
};
declare type IconsColor = {
    flatLeftIcon: string | undefined;
    flatRightIcon: string | undefined;
    outlineLeftIcon: string | undefined;
    outlineRightIcon: string | undefined;
};
export declare type State = {
    text: string;
    name: string;
    outlinedText: string;
    largeText: string;
    flatTextPassword: string;
    outlinedLargeText: string;
    outlinedTextPassword: string;
    nameNoPadding: string;
    flatDenseText: string;
    flatDense: string;
    outlinedDenseText: string;
    outlinedDense: string;
    flatMultiline: string;
    flatTextArea: string;
    outlinedMultiline: string;
    outlinedTextArea: string;
    maxLengthName: string;
    flatTextSecureEntry: boolean;
    outlineTextSecureEntry: boolean;
    iconsColor: IconsColor;
};
export declare function inputReducer(state: State, action: ReducerAction): {
    text: string;
    name: string;
    outlinedText: string;
    largeText: string;
    flatTextPassword: string;
    outlinedLargeText: string;
    outlinedTextPassword: string;
    nameNoPadding: string;
    flatDenseText: string;
    flatDense: string;
    outlinedDenseText: string;
    outlinedDense: string;
    flatMultiline: string;
    flatTextArea: string;
    outlinedMultiline: string;
    outlinedTextArea: string;
    maxLengthName: string;
    flatTextSecureEntry: boolean;
    outlineTextSecureEntry: boolean;
    iconsColor: IconsColor;
};
export {};