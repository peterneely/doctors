import { borders, colors } from '../theme';

export const doctor = {
  container: { borderLeft: borders.default },
  contentContainer: height => ({ height }),
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
      fontSize: '0.8em',
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
    directionsIcon: { height: 50, width: 50 },
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

export const doctorListItems = {
  container: showRightBorder => ({
    borderRight: showRightBorder ? borders.default : 'none',
  }),
};

export const review = {
  buttonContainer: { marginLeft: 20 },
  buttonsContainer: { textAlign: 'right' },
  container: { display: 'flex', margin: 25 },
  contentContainer: { flex: 3 },
  input: { fontSize: '1.3em', lineHeight: '1.3em' },
  inputContainer: {
    border: borders.default,
    color: colors.listItemText,
    marginBottom: 30,
    padding: '15px 20px',
    position: 'relative',
  },
  inputLabel: {
    backgroundColor: 'white',
    color: colors.listItemTitle,
    left: 10,
    padding: 10,
    position: 'absolute',
    top: -20,
  },
  rightMargin: { flex: 1 },
  title: {
    color: colors.detailTitle,
    fontSize: '2em',
    fontWeight: 'normal',
    marginBottom: 20,
  },
};

export const reviewListItem = {
  author: { fontWeight: 'bold', margin: '15px 0' },
  authorContainer: {
    alignItems: 'flex-start',
    display: 'flex',
    justifyContent: 'space-between',
  },
  body: {
    color: colors.listItemText,
    fontSize: '0.9em',
    fontWeight: 'lighter',
    lineHeight: '1.6em',
    margin: '4px 0',
  },
  button: {
    color: colors.listItemTitle,
    fontSize: '0.8em',
    fontWeight: 'lighter',
  },
  container: { borderBottom: borders.default, padding: 20 },
  date: {
    color: colors.listItemText,
    fontSize: '0.8em',
    fontWeight: 'lighter',
  },
};

export const reviewListItems = {
  commandContainer: { display: 'flex', flex: 1, height: 50, marginTop: 30 },
  commandMargin: { width: 48 },
  container: { display: 'flex' },
  reviewsContainer: height => ({
    flex: 3,
    height,
    marginRight: 20,
    overflowY: 'scroll',
  }),
};
