import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form'
import { required, maxLehgthCreator } from './../../utils/validation/validators';
import { Textarea } from '../../Common/FormsControls/FormsControls.js';


const maxLehgth10 = maxLehgthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='newPostText' component={Textarea} className={s.textarea__posts} validate={[required, maxLehgth10]} placeholder='Write Text' />
      </div>
      <div>
        <button className={s.postBtn}> Add post </button>
      </div>
    </form>)
};
let AddNewPostFormRedax = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);

const MyPosts = (props) => {

  let postsElement = props.posts.map(p => <Post message={p.message + ' '} likeCount={' ' + p.likeCount} />);
  // let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }


  return (
    <div className='s.postsBlock'>
      <h3> My posts </h3>
      <AddNewPostFormRedax onSubmit={onAddPost} />
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>);

}


export default MyPosts;