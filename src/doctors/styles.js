import { borders, colors } from '../theme';

export const doctor = {
  container: (height = 'auto') => ({
    borderLeft: borders.default,
    height,
    overflowY: 'scroll',
  }),
  contentContainer: { display: 'flex' },
  displayName: {},
  practiceType: {},
  reviewCount: {},
  textContainer: {},
};

export const doctorHeader = (() => {
  const text = {
    color: colors.listItemText,
    fontSize: '0.9em',
    fontWeight: 'lighter',
    padding: '1px 0',
  };
  return {
    address: {
      color: colors.listItemTitle,
      fontSize: '1.2em',
      fontWeight: 'lighter',
    },
    addressContainer: { flex: 1 },
    addressLabel: {
      color: colors.listItemText,
      fontSize: '0.7em',
      fontWeight: 'lighter',
    },
    bigAvatar: {
      height: 80,
      marginRight: 10,
      width: 80,
    },
    container: {
      alignItems: 'flex-start',
      borderBottom: borders.default,
      display: 'flex',
      padding: '18px 24px 24px',
      width: '100%',
    },
    directionsButton: { color: 'white' },
    directionsIcon: { height: 50, width: 50 },
    fab: {
      '&:hover': { backgroundColor: colors.buttonPrimaryHover },
      backgroundColor: colors.buttonPrimary,
      height: 65,
      width: 65,
    },
    mainContainer: {
      alignItems: 'flex-start',
      display: 'flex',
      flex: 3,
      justifyContent: 'space-between',
      marginRight: 5,
    },
    practiceType: {
      ...text,
      color: colors.listItemTitle,
    },
    reviewCount: text,
    title: {
      color: colors.detailTitle,
      fontSize: 36,
      fontWeight: 'lighter',
      padding: '10px 0',
    },
  };
})();

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
