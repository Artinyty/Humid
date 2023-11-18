import { compose } from 'redux';
import { addPostActionCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
const mapStateProps = (state) => {
  return {
    posts: state.profilePage.posts,

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    }

  }
}

export default compose(
  connect(mapStateProps, mapDispatchToProps)
)(MyPosts);

