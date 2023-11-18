import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js';
import { compose } from 'redux';
import { getStatus, updateStatus, getUserProfile } from './../../Redux/profile-reducer';


function ProfileContainer(props) {
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      // Перенаправляем на профиль пользователя с id по умолчанию 30226
      navigate('/profile/30226');
    }
    props.getUserProfile(userId);
    props.getStatus(userId);

  }, [userId, navigate, props]);
  //

  return <Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />;
}


const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
});




export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withAuthRedirect
)(ProfileContainer);




