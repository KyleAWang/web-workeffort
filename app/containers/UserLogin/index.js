import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {
  makeSelectError,
  makeSelectLoading,
  makeSelectUserName,
  makeSelectPassord,
  makeSelectFormErrors
} from './selectors';
import {
  changePassword,
  changeUserName,
  userLogin,
  onFormErrors
} from './actions';

class UserLogin extends React.Component {

  constructor(props) {
    super(props);
    this.onClickSubmit = this.onClickSubmit.bind(this);
    this.validateFormFields = this.validateFormFields.bind(this);
  }

  onClickSubmit(evt) {
    const {userName, password, formErrors, onUpdateFormErrors, onSubmitForm} = this.props;

    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }

    let newFormErrors;

    if (!userName) {
      newFormErrors = {
        ...formErrors,
        userName: 'User Name is required'
      }
    }

    if (!password) {
      newFormErrors = {
        ...newFormErrors,
        password: 'Password is required'
      }
    }

    if (newFormErrors) {
      onUpdateFormErrors(newFormErrors);
    } else {
      onSubmitForm();
    }
  }

  validateFormFields() {
    const {userName, password, formErrors, onUpdateFormErrors } = this.props;

    let newFormErrors;

    if (!userName) {
      newFormErrors = {
        ...formErrors,
        userName: 'User Name is required'
      }
    }

    if (!password) {
      newFormErrors = {
        ...newFormErrors,
        password: 'Password is required'
      }
    }

    if (newFormErrors) {
      onUpdateFormErrors(newFormErrors);
    }
  }

  render() {
    const {userName, password, formErrors} = this.props;
    console.log(formErrors);

    return (
      <div>
        <form onSubmit={this.onClickSubmit}>
          <div>
            <TextField hintText="Username" value={userName || ''} onChange={this.props.onChangeUserName}
                       errorText={formErrors.userName}/>
          </div>
          <br/>
          <TextField hintText="Password" type="password" value={password || ''} onChange={this.props.onChangePassword}
                     errorText={formErrors.password}/>
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
  password: makeSelectPassord(),
  formErrors: makeSelectFormErrors()
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUserName: (evt) => {dispatch(changeUserName(evt.target.value))},
    onChangePassword: (evt) => dispatch(changePassword(evt.target.value)),
    onUpdateFormErrors: (formErrors) => dispatch(onFormErrors(formErrors)),
    onSubmitForm: (evt) => dispatch(userLogin())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);