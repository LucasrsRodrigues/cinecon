import 'styled-components/native';
import theme from '../styles/theme';
import * as ReactNative from "react-native";

declare module 'styled-components' {
  type ThemeType = typeof theme;
  type ReactTypes = typeof ReactNative;

  export interface DefaultTheme extends ThemeType extends ReactTypes { }
}