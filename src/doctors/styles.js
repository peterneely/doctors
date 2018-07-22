import { borders, colors } from '../theme';

export const doctor = {
  container: (height = 'auto') => ({
    borderLeft: borders.default,
    height,
    overflowY: 'scroll',
  }),
  contentContainer: { display: 'flex' },
};

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
    arrowIcon: { color: colors.listItemTitle, height: 36, width: 36 },
    bigAvatar: {
      height: 60,
      marginTop: 6,
      width: 60,
    },
    container: active => ({
      alignItems: 'flex-start',
      backgroundColor: active ? colors.activeBackground : 'white',
      borderBottom: borders.default,
      display: 'flex',
    }),
    displayName: {
      color: colors.listItemTitle,
      fontSize: '1.2em',
      fontWeight: 'lighter',
      marginBottom: 2,
    },
    practiceType: { ...text, marginLeft: 6 },
    text,
    textContainer: { margin: '5px 0 15px' },
  };
})();
