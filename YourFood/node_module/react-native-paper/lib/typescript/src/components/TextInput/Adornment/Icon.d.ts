import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import IconButton from '../../IconButton';
import type { $Omit } from '../../../../src/types';
declare type Props = $Omit<React.ComponentProps<typeof IconButton>, 'icon' | 'theme'> & {
    name: string;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    theme?: ReactNativePaper.Theme;
};
export declare const ICON_SIZE = 24;
declare type StyleContextType = {
    style: StyleProp<ViewStyle>;
    isTextInputFocused: boolean;
    forceFocus: () => void;
};
export declare const IconAdornment: React.FunctionComponent<{
    testID: string;
    icon: React.ReactNode;
    topPosition: number;
    side: 'left' | 'right';
} & Omit<StyleContextType, 'style'>>;
declare const TextInputIcon: {
    ({ name, onPress, ...rest }: Props): JSX.Element;
    displayName: string;
};
export default TextInputIcon;
