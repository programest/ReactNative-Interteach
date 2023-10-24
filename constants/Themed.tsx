



import { Text as DefaultText, TextInput as DefaultTextInput, View as DefaultView, useColorScheme, Platform } from 'react-native';
import Colors from '../constants/Colors';
import ContentLoader from "react-content-loader/native"
type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type ContentLoaderCustomProps = ThemeProps;


export function useThemeColor(
  props: { light?: string; dark?: string, IOSLight?: string, IOSDark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const isIOS = Platform.OS === 'ios';
  const platformTheme =  theme;

  const colorFromProps = props[platformTheme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[platformTheme][colorName];
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'borderColor');
  return <DefaultView style={[{ backgroundColor, borderColor }, style]} {...otherProps} />;
}

export function ContentLoaderCustom(props: ContentLoaderCustomProps) {
  const { lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'backgroundColorLoading');
  const foregroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'foregroundColorLoading');

  return <ContentLoader speed={1} width='90%' height='95%'  backgroundColor={backgroundColor} foregroundColor={foregroundColor}  {...otherProps} />;
}

