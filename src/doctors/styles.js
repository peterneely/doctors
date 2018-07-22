import { colors } from '../theme';

export const doctors = {
  container: {
    margin: '0 auto',
    maxWidth: 1440,
  },
  contentContainer: { display: 'flex' },
};

export const doctorListItem = (() => {
  const text = {
    color: colors.listItemText,
    fontSize: '0.8em',
    fontWeight: 'lighter',
  };
  return {
    displayName: { color: colors.listItemTitle },
    practiceType: { ...text, marginLeft: 6 },
    text,
  };
})();
