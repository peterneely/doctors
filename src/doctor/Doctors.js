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
    this.props.actions.getDoctors();
  }

  content = (() => {
    const handleSelectDoctor = ({ id }) => history.push(`${rootPath}/${id}`);
    return {
      render: () => {
        const { children, doctorList = [] } = this.props;
        return (
          <div>
            <ListItemSearch />
            <div style={{ display: 'flex' }}>
              <ListItems items={doctorList} onClickItem={handleSelectDoctor} />
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
  doctorList: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => {
  const {
    doctor: { list: doctorList },
  } = state;
  return { doctorList };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Doctors);
