import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import _ from 'lodash';
// import DraftsIcon from '@material-ui/icons/Drafts';

class ListItems extends Component {
  content = (() => {
    const { onClickItem } = this.props;
    const handleClickItem = id => () => onClickItem(id);
    return {
      render: () => {
        const { itemsById } = this.props;
        return (
          <div style={{ border: '1px solid grey', overflowY: 'scroll' }}>
            <List component="nav">
              {_.map(itemsById, (item, id) => {
                return (
                  <ListItem button key={id} onClick={handleClickItem(id)}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.name.first} />
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
  itemsById: PropTypes.object.isRequired,
  onClickItem: PropTypes.func.isRequired,
};

export default ListItems;
