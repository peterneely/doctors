import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import _ from 'lodash';

import { review as styles } from './styles';

class Review extends Component {
  state = { body: '', loaded: false, name: '', title: '' };

  componentDidMount() {
    this.initState();
  }

  componentDidUpdate() {
    this.initState();
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  initState = () => {
    const { add, review = {} } = this.props;
    const { loaded } = this.state;
    const ready = add || (!add && !!_.size(review));
    if (loaded || !ready) return;
    const { body, name } = review;
    const title = add ? 'Provide your feedback' : 'Update your feedback';
    this.setState({ body, loaded: true, name, title });
  };

  render() {
    const { body, loaded, name, title } = this.state;
    if (!loaded) return null;
    const { classes, onCancel: handleCancel } = this.props;
    return (
      <div style={styles.container}>
        <div style={styles.contentContainer}>
          <div style={styles.title}>{title}</div>
          <div style={styles.inputContainer}>
            <span style={styles.inputLabel}>Your review</span>
            <Input
              className={classes.input}
              disableUnderline
              fullWidth
              id="body"
              multiline
              onChange={this.handleChange('body')}
              rows="6"
              value={body}
            />
          </div>
          <div style={styles.inputContainer}>
            <span style={styles.inputLabel}>Your display name</span>
            <Input
              className={classes.input}
              disableUnderline
              fullWidth
              id="name"
              onChange={this.handleChange('name')}
              value={name}
            />
          </div>
          <div>
            <Button className={classes.button} onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </div>
        <div style={styles.rightMargin} />
      </div>
    );
  }
}

Review.propTypes = {
  add: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  onCancel: PropTypes.func.isRequired,
  review: PropTypes.object,
};

export default withStyles(styles)(Review);
