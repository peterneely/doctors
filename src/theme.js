import { createMuiTheme } from '@material-ui/core/styles';

const colorCodes = {
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
};

export const overrides = {
  palette: {
    primary: {
      main: colorCodes.teal,
    },
  },
};

export default createMuiTheme(overrides);
