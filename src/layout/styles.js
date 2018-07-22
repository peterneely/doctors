export const listItemSearch = {
  container: {
    background: 'linear-gradient(to right, #191A52 , #27466A)',
    display: 'flex',
    padding: '28px 42px',
  },
  input: {
    backgroundColor: 'white',
    border: 'none',
    height: 44,
    marginLeft: 42,
    width: '100%',
  },
  inputContainer: {
    display: 'flex',
    width: '100%',
  },
  title: { color: 'white', fontSize: '2.5em' },
};

export const listItems = {
  container: height => ({
    flex: 1,
    height: height || 'auto',
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

export const smallChip = color => ({
  backgroundColor: color,
  borderRadius: 3,
  color: 'white',
  fontSize: '0.8em',
  fontWeight: 'lighter',
  padding: '2px 8px',
});
