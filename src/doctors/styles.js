import { colors } from '../theme';

export const doctors = {
  container: {
    margin: '0 auto',
    maxWidth: 1440,
  },
  contentContainer: { display: 'flex' },
};

export const doctorListItem = {
  displayName: { color: colors.listItemTitle },
  practiceType: { marginLeft: 6 },
  text: {
    color: colors.listItemText,
    fontSize: '0.8em',
    fontWeight: 'lighter',
  },
};
