import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArrowIcon from '@material-ui/icons/ArrowForward';
import { withStyles } from '@material-ui/core/styles';
import _ from 'lodash';

import LabeledInput from '../layout/LabeledInput';
import PrimaryButton from '../layout/PrimaryButton';
import TertiaryButton from '../layout/TertiaryButton';
import SecondaryButton from '../layout/SecondaryButton';
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

  createButtons = () => {
    const { add, onCancel: handleCancel } = this.props;
    const { body, name } = this.state;
    const canSubmit = !!body && !!name;
    return [
      <SecondaryButton
        ariaLabel="Cancel"
        key="cancel"
        label="Cancel"
        onClick={handleCancel}
      />,
      !add && (
        <TertiaryButton
          ariaLabel="Remove"
          label="Remove"
          onClick={this.handleRemove}
        />
      ),
      !add && (
        <PrimaryButton
          ariaLabel="Update"
          disabled={!canSubmit}
          label="Update"
          onClick={this.handleUpdate}>
          <ArrowIcon />
        </PrimaryButton>
      ),
      add && (
        <PrimaryButton
          ariaLabel="Add Review"
          disabled={!canSubmit}
          label="Add Review"
          onClick={this.handleAdd}>
          <ArrowIcon />
        </PrimaryButton>
      ),
    ];
  };

  renderButtons = () => (
    <div style={styles.buttonsContainer}>
      {this.createButtons()
        .filter(button => button)
        .map((Button, index) => (
          <span key={index} style={styles.buttonContainer}>
            {Button}
          </span>
        ))}
    </div>
  );

  renderDisplayName = () => {
    const { name = '' } = this.state;
    return (
      <LabeledInput
        label="Your display name"
        onChange={this.handleChange('name')}
        value={name}
      />
    );
  };

  renderReview = () => {
    const { body = '' } = this.state;
    return (
      <LabeledInput
        label="Your review"
        multiline
        onChange={this.handleChange('body')}
        rows="6"
        value={body}
      />
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
          {this.renderButtons()}
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
