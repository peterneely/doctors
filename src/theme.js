import { createMuiTheme } from '@material-ui/core/styles';

const colorCodes = {
  darkBlue: '#191A52',
  darkBlueHighlight: '#27466A',
  darkBlueHighlightHover: '#526b88',
  darkGrey: '#808080',
  grey: '#AAAAAA',
  lightTeal: '#D9F0EB',
  pink: '#FB646B',
  pinkHoverLight: '#fff0f0',
  teal: '#64C5AF',
  tealHover: '#92d6c7',
  tealHoverLight: '#e6f6f2',
};

export const colors = {
  activeBackground: colorCodes.lightTeal,
  border: colorCodes.grey,
  buttonPrimary: colorCodes.darkBlueHighlight,
  buttonPrimaryHover: colorCodes.darkBlueHighlightHover,
  buttonSecondary: colorCodes.teal,
  buttonSecondaryHover: colorCodes.tealHover,
  buttonSecondaryHoverLight: colorCodes.tealHoverLight,
  buttonTertiary: colorCodes.pink,
  buttonTertiaryHover: colorCodes.pinkHoverLight,
  cool: colorCodes.grey,
  detailTitle: colorCodes.darkBlueHighlight,
  hot: colorCodes.pink,
  listItemText: colorCodes.darkGrey,
  listItemTitle: colorCodes.teal,
  medium: colorCodes.teal,
  searchBarLeft: colorCodes.darkBlue,
  searchBarRight: colorCodes.darkBlueHighlight,
};

export const borders = {
  default: `1px solid ${colors.border}`,
};

export const overrides = {
  palette: {
    primary: {
      main: colorCodes.teal,
    },
  },
};

export default createMuiTheme(overrides);
