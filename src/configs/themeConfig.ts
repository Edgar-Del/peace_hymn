import {DefaultTheme, configureFonts} from 'react-native-paper';
import {fontConfig} from './fonts';
import colors from 'configs/colors';

const theme = {
  ...DefaultTheme,
  roundness: 20,
  colors: {
    ...DefaultTheme.colors,
    success: colors.peaceGreen,
    primary: '#CB77EA',
    surface: colors.peaceWhite,
    tertiary: '#474076',
    accent: '#1f1f1f',
    background: '#fff',
    text: colors.peaceBlack,
    placeholder: '#fff',
  },
  fonts: configureFonts(fontConfig),
};

export {theme};
