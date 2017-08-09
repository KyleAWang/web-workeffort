import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {
  makeSelectError,
  makeSelectLoading,
  makeSelectUserName,
  makeSelectPassord
} from './selectors';
import {
  changePassword,
  changeUserName,
  userLogin
} from './actions';

class UserLogin extends React.Component {

  render() {
    const {userName, password} = this.props;

    return (
      <div>
        <form onSubmit={this.props.onSubmitForm}>
          <div>
            <TextField hintText="Username" value={userName || ''} onChange={this.props.onChangeUserName}/>
          </div>
          <br/>
          <TextField hintText="Password" type="password" value={password || ''} onChange={this.props.onChangePassword}/>
          <br/>
          <RaisedButton label="Login" primary={true} type="submit"/>
        </form>
      </div>
    );
  }
}

UserLogin.PropTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]),
  userName: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  password: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ])
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  userName: makeSelectUserName(),
  password: makeSelectPassord()
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUserName: (evt) => dispatch(changeUserName(evt.target.value)),
    onChangePassword: (evt) => dispatch(changePassword(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) {
        evt.preventDefault();
      }
      dispatch(userLogin());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);