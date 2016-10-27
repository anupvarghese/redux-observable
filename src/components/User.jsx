import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchUserEpic } from '../redux/epics/user'

const propTypes = {
  fetchUserEpic: PropTypes.func,
};

const User = () => (
  <div>
    <h1> Trying out Redux-Observable </h1>
    <h4> Fetch User </h4>
    <button onClick={props.fetchUserEpic} />
  </div>
);
const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  fetchUserEpic,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);