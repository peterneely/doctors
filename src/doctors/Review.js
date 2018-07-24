import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArrowIcon from '@material-ui/icons/ArrowForward';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import _ from 'lodash';

import PrimaryButton from '../layout/PrimaryButton';
import SecondaryButton from '../layout/SecondaryButton';
import TertiaryButton from '../layout/TertiaryButton';
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

  renderCommands = () => {
    const {
      add,
      onCancel: handleCancel,
      onRemove: handleRemove,
      onUpdate: handleUpdate,
    } = this.props;
    return (
      <div style={styles.buttonsContainer}>
        <span style={styles.buttonContainer}>
          <TertiaryButton
            ariaLabel="Cancel"
            label="Cancel"
            onClick={handleCancel}
          />
        </span>
        {!add && (
          <span style={styles.buttonContainer}>
            <SecondaryButton
              ariaLabel="Remove"
              label="Remove"
              onClick={handleRemove}
            />
          </span>
        )}
        <span style={styles.buttonContainer}>
          <PrimaryButton
            ariaLabel="Update"
            label="Update"
            onClick={handleUpdate}>
            <ArrowIcon />
          </PrimaryButton>
        </span>
      </div>
    );
  };

  renderDisplayName = () => (
    <div style={styles.inputContainer}>
      <span style={styles.inputLabel}>Your display name</span>
      <Input
        className={this.props.classes.input}
        disableUnderline
        fullWidth
        id="name"
        onChange={this.handleChange('name')}
        value={this.state.name}
      />
    </div>
  );

  renderReview = () => (
    <div style={styles.inputContainer}>
      <span style={styles.inputLabel}>Your review</span>
      <Input
        className={this.props.classes.input}
        disableUnderline
        fullWidth
        id="body"
        multiline
        onChange={this.handleChange('body')}
        rows="6"
        value={this.state.body}
      />
    </div>
  );

  renderTitle = () => <div style={styles.title}>{this.state.title}</div>;

  render() {
    return !this.state.loaded ? null : (
      <div style={styles.container}>
        <div style={styles.contentContainer}>
          {this.renderTitle()}
          {this.renderReview()}
          {this.renderDisplayName()}
          {this.renderCommands()}
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
  onRemove: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  review: PropTypes.object,
};

export default withStyles(styles)(Review);
