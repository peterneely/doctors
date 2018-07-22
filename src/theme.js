import { createMuiTheme } from '@material-ui/core/styles';

const colorCodes = {
  darkBlue: '#191A52',
  darkBlueHighlight: '#27466A',
  grey: '#AAAAAA',
  lightTeal: '#D9F0EB',
  pink: '#FB646B',
  teal: '#64C5AF',
};

export const colors = {
  activeBackground: colorCodes.lightTeal,
  border: colorCodes.grey,
  cool: colorCodes.grey,
  hot: colorCodes.pink,
  listItemText: colorCodes.grey,
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
