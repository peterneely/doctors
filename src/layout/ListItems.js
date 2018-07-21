import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';

class ListItems extends Component {
  content = (() => {
    const { onClickItem } = this.props;
    const handleClickItem = item => () => onClickItem(item);
    return {
      render: () => {
        const { items } = this.props;
        return (
          <div style={{ border: '1px solid grey' }}>
            <List component="nav">
              {items.map(item => {
                const { id, name } = item;
                return (
                  <ListItem button key={id} onClick={handleClickItem(item)}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={name} />
                  </ListItem>
                );
              })}
            </List>
          </div>
        );
      },
    };
  })();

  render() {
    return this.content.render();
  }
}

ListItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickItem: PropTypes.func.isRequired,
};

export default ListItems;
