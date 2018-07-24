import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArrowIcon from '@material-ui/icons/ArrowForward';
import CheckIcon from '@material-ui/icons/Check';
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

  handleAdd = () => this.submit(this.props.onAdd);

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleRemove = () => this.submit(this.props.onRemove);

  handleUpdate = () => this.submit(this.props.onUpdate);

  initState = () => {
    const { add, review = {} } = this.props;
    const { loaded } = this.state;
    const ready = add || (!add && !!_.size(review));
    if (loaded || !ready) return;
    const { body, name } = review;
    const title = add ? 'Provide your feedback' : 'Update your feedback';
    this.setState({ body, loaded: true, name, title });
  };

  renderCheckmark = ({ valid: show }) => (
    <CheckIcon style={styles.checkIcon(show)} />
  );

  renderCommands = () => {
    const { add, onCancel: handleCancel } = this.props;
    const { body, name } = this.state;
    const canSubmit = !!body && !!name;
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
              onClick={this.handleRemove}
            />
          </span>
        )}
        {!add && (
          <span style={styles.buttonContainer}>
            <PrimaryButton
              ariaLabel="Update"
              disabled={!canSubmit}
              label="Update"
              onClick={this.handleUpdate}>
              <ArrowIcon />
            </PrimaryButton>
          </span>
        )}
        {add && (
          <span style={styles.buttonContainer}>
            <PrimaryButton
              ariaLabel="Add Review"
              disabled={!canSubmit}
              label="Add Review"
              onClick={this.handleAdd}>
              <ArrowIcon />
            </PrimaryButton>
          </span>
        )}
      </div>
    );
  };

  renderDisplayName = () => {
    const { name = '' } = this.state;
    return (
      <div style={styles.inputContainer}>
        <span style={styles.inputLabel}>Your display name</span>
        <Input
          className={this.props.classes.input}
          disableUnderline
          fullWidth
          id="name"
          onChange={this.handleChange('name')}
          value={name}
        />
        {this.renderCheckmark({ valid: !!name })}
      </div>
    );
  };

  renderReview = () => {
    const { body = '' } = this.state;
    return (
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
          value={body}
        />
        {this.renderCheckmark({ valid: !!body })}
      </div>
    );
  };

  renderTitle = () => <div style={styles.title}>{this.state.title}</div>;

  submit = (action = () => {}) => {
    const { onCancel: close = () => {}, review = {} } = this.props;
    const { id } = review;
    const { body, name } = this.state;
    action({ body, id, name });
    close();
  };

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
  onAdd: PropTypes.func,
  onCancel: PropTypes.func.isRequired,
  onRemove: PropTypes.func,
  onUpdate: PropTypes.func,
  review: PropTypes.object,
};

export default withStyles(styles)(Review);
