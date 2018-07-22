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
    fontSize: '0.9em',
    fontWeight: 'lighter',
  };
  return {
    container: active => ({
      backgroundColor: active ? colors.activeBackground : 'white',
      borderBottom: `1px solid ${colors.border}`,
    }),
    displayName: {
      color: colors.listItemTitle,
      fontSize: '1.2em',
      fontWeight: 'lighter',
      marginBottom: 2,
    },
    practiceType: { ...text, marginLeft: 6 },
    text,
  };
})();
