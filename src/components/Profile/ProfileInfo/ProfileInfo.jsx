import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
// import ProfileStatus from './ProfileStatus/ProfileStatus.jsx';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return < Preloader />
  }
  return (
    <div>
      {/* <div>
        <img className={s.imgAva}
          alt='foto'
          src='http://kartina-optom.com.ua/images/stories/virtuemart/product/50%D1%8550.jpg' />
      </div> */}
      <div>
        <img className={s.imgAva} alt='foto' src={props.profile.photos.large} />
        {/* <ProfileStatus /> */}
      </div>
    </div>
  );
}

export default ProfileInfo;
