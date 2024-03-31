import { extendTheme } from '@chakra-ui/react';

import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { components } from './components';
import { config } from './config';
import { fontWeights } from './fontWeights';
import { fonts } from './fonts';
import { layerStyles } from './layerStyles';
import { spacing } from './spacing';
import { styles } from './styles';
import { textStyles } from './textStyles';

const override = {
  colors,
  fonts,
  fontWeights,
  components,
  styles,
  config,
  breakpoints,
  layerStyles,
  textStyles,
  ...spacing,
};

export const theme = extendTheme(override);
