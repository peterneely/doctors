import { borders, colors } from '../theme';

export const defaultButton = {
  border: 'none',
  boxShadow: 'none',
  color: 'white',
  maxWidth: 190,
  minHeight: 50,
  minWidth: 100,
};

export const labeledInput = {
  checkIcon: show => ({
    color: colors.listItemTitle,
    height: 36,
    opacity: show ? 1 : 0,
    position: 'absolute',
    right: 15,
    top: 15,
    transition: 'opacity 0.2s ease',
    width: 36,
  }),
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
  inputProps: { style: { paddingRight: 45 } },
};

export const listItems = {
  container: height => ({
    flex: 1,
    height,
    overflowY: 'scroll',
  }),
  listContainer: { paddingTop: 0 },
};

export const masterDetail = {
  container: {
    margin: '0 auto',
    maxWidth: 1440,
  },
  contentContainer: { display: 'flex' },
  detailContainer: { flex: 2 },
};

export const roundIconButton = {
  fab: {
    '&:hover': { backgroundColor: colors.buttonPrimaryHover },
    backgroundColor: colors.buttonPrimary,
    height: 65,
    width: 65,
  },
  icon: { color: 'white' },
};

export const searchListItems = {
  container: {
    background: `linear-gradient(to right, ${colors.searchBarLeft} , ${
      colors.searchBarRight
    })`,
    display: 'flex',
    padding: '25px 42px',
  },
  icon: {
    color: colors.cool,
    height: 36,
    margin: '0 10px 2px 5px',
    width: 36,
  },
  input: {
    backgroundColor: 'white',
    border: 'none',
    height: 44,
    width: '100%',
  },
  inputContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    display: 'flex',
    height: 50,
    marginLeft: 40,
    width: '100%',
  },
  title: { color: 'white', fontSize: '2.2em' },
};

export const smallChip = color => ({
  backgroundColor: color,
  borderRadius: 3,
  color: 'white',
  fontSize: '0.8em',
  fontWeight: 'lighter',
  padding: '2px 8px',
});
