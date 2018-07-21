import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';
import ListItemSearch from '../layout/ListItemSearch';
import ListItems from '../layout/ListItems';
import history from '../history';
import { rootPath } from './Routes';

class Doctors extends Component {
  constructor(props) {
    super(props);
    props.actions.getDoctors();
  }

  content = (() => {
    const handleSearch = event => {};
    const handleSelectDoctor = id => history.push(`${rootPath}/${id}`);
    const styles = {
      containerStyle: {
        margin: '0 auto',
        maxWidth: 1440,
      },
    };
    return {
      render: () => {
        const { children, doctorsById = {} } = this.props;
        return (
          <div style={styles.containerStyle}>
            <ListItemSearch
              onSearch={handleSearch}
              placeholder="Search doctors by name"
              title="Doctors"
            />
            <div style={{ display: 'flex' }}>
              <ListItems
                itemsById={doctorsById}
                onClickItem={handleSelectDoctor}
              />
              <div>{children}</div>
            </div>
          </div>
        );
      },
    };
  })();

  render() {
    return this.content.render();
  }
}

Doctors.propTypes = {
  actions: PropTypes.object,
  children: PropTypes.node.isRequired,
  doctorsById: PropTypes.object,
};

const mapStateToProps = state => {
  const {
    doctor: { doctorsById },
  } = state;
  return { doctorsById };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Doctors);
