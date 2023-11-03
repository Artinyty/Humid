import React, { useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import Profile from './Profile';
import { getUserProfile } from '../../Redux/profile-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js';
import { compose } from 'redux';


function ProfileContainer(props) {
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      // Перенаправляем на профиль пользователя с id по умолчанию
      navigate('/profile/2');
    }
    props.getUserProfile(userId);
  }, [userId, navigate, props]);
  //

  return <Profile {...props} profile={props.profile} />;
}


const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});


export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withAuthRedirect
)(ProfileContainer);




