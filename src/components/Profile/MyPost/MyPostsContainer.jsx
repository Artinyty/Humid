import { compose } from 'redux';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
const mapStateProps = (state) => {
  return {
    posts: state.profilePage.posts,

  }
}
const mapDispachToProps = (dispatch) => {
  return {
    updateNewPost: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }

  }
}

export default compose(
  connect(mapStateProps, mapDispachToProps)
)(MyPosts);

// const MyPostsContainer = connect(mapStateProps, mapDispachToProps)(MyPosts);
// export default MyPostsContainer; 