/// <reference types="react" />
import { StackNavigationState } from '@react-navigation/native';
import { NativeStackNavigatorProps, NativeStackNavigationOptions, NativeStackNavigationEventMap } from '../types';
declare function NativeStackNavigator(props: NativeStackNavigatorProps): JSX.Element;
declare const _default: <ParamList extends Record<string, object | undefined>>() => import("@react-navigation/native").TypedNavigator<ParamList, StackNavigationState, NativeStackNavigationOptions, NativeStackNavigationEventMap, typeof NativeStackNavigator>;
export default _default;
