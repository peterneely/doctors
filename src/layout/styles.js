import { colors } from '../theme';

export const listItems = {
  container: (height = 'auto') => ({
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
