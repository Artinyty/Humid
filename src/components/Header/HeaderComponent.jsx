import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getAuthUserData, logout } from '../../Redux/auth-reducer.js';


class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }
  render() {
    return <Header {...this.props} />
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});


export default compose(
  connect(mapStateToProps, { getAuthUserData, logout }),
)(HeaderContainer);

// export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);
